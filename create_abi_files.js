const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const save_dir = './artifacts/abis';

let no_xtensions = [];

function no_xtension_list(fpath) {
    let splits = fpath.split('/');
    let d = splits[splits.length-1];
    // console.log(d);
    no_xtensions.push(d.split('.')[0].substring(1));
}

function no_interface(f) {
    return no_xtensions.indexOf(f);
}

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
//   console.log('files', files);
files.forEach(f => no_xtension_list(f));
console.log('files', no_xtensions);
  return files.filter(f => {
      return f.indexOf('.dbg.') === -1 && f.indexOf('interfaces') === -1
  }).reduce((a, f) => a.concat(f), []);
}
function readFiles(files, onFileContent, onError) {
    files.forEach(function(filename) {
      fs.readFile(filename, 'utf-8', (err, content) => {
        if (err) {
          onError(err);
          return;
        }
        console.log(filename);
        onFileContent(filename, JSON.parse(content));
      });
    });
}

function getFileName(fname) {
    let splits = fname.split('/');
    return splits[splits.length-1];
}

function create_abi_files() {
    getFiles('./artifacts/contracts')
    .then(files => {
        if (!fs.existsSync(save_dir)){
            fs.mkdirSync(save_dir);
        }
        readFiles(files, (fname, json) => {
            let abi = JSON.stringify(json.abi);
            fname = getFileName(fname);
            if(abi.length && no_interface(fname))
                fs.writeFileSync(save_dir + '/' + fname, abi);
        }, _ => {})
    })
    .catch(err => console.log('error:', err));
}

create_abi_files();
