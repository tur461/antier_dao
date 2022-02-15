/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GOHM, GOHMInterface } from "../GOHM";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_migrator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sOHM",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "approved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "balanceFrom",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "balanceTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "index",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sOHM",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sOHM",
    outputs: [
      {
        internalType: "contract IsOHM",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001c5e38038062001c5e833981810160405260408110156200003757600080fd5b508051602091820151604080518082018252600e81526d476f7665726e616e6365204f484d60901b81860190815282518084019093526004835263674f484d60e01b9583019590955280519394929390926012916200009991600391620001c6565b508151620000af906004906020850190620001c6565b5060f81b7fff000000000000000000000000000000000000000000000000000000000000001660805250506001600160a01b03821662000136576040805162461bcd60e51b815260206004820152601660248201527f5a65726f20616464726573733a204d69677261746f7200000000000000000000604482015290519081900360640190fd5b600680546001600160a01b0319166001600160a01b038481169190911790915581166200019f576040805162461bcd60e51b81526020600482015260126024820152715a65726f20616464726573733a20734f484d60701b604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b03929092169190911790555062000272565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b60805160f81c6119ce62000290600039806109f452506119ce6000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c8063587cde1e116100ee57806395d89b4111610097578063a824876811610071578063a824876814610528578063a9059cbb14610545578063b4b5ea5714610571578063dd62ed3e14610597576101ae565b806395d89b41146104c85780639dc29fac146104d0578063a457c2d7146104fc576101ae565b80636fcfff45116100c85780636fcfff451461045057806370a0823114610476578063782d6fe11461049c576101ae565b8063587cde1e146103e75780635c19a95c1461040d57806366a5236c14610433576101ae565b806319d40b081161015b5780632c678c64116101355780632c678c6414610369578063313ce56714610371578063395093511461038f57806340c10f19146103bb576101ae565b806319d40b081461032357806323b872dd1461032b5780632986c0e514610361576101ae565b80631068361f1161018c5780631068361f146102b557806315079925146102e557806318160ddd14610309576101ae565b806306fdde03146101b3578063095ea7b3146102305780630cdfebfa14610270575b600080fd5b6101bb6105c5565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f55781810151838201526020016101dd565b50505050905090810190601f1680156102225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025c6004803603604081101561024657600080fd5b506001600160a01b03813516906020013561065b565b604080519115158252519081900360200190f35b61029c6004803603604081101561028657600080fd5b506001600160a01b038135169060200135610672565b6040805192835260208301919091528051918290030190f35b6102e3600480360360408110156102cb57600080fd5b506001600160a01b0381358116916020013516610696565b005b6102ed6108df565b604080516001600160a01b039092168252519081900360200190f35b6103116108ee565b60408051918252519081900360200190f35b6102ed6108f4565b61025c6004803603606081101561034157600080fd5b506001600160a01b03813581169160208101359091169060400135610903565b61031161096c565b61025c6109e2565b6103796109f2565b6040805160ff9092168252519081900360200190f35b61025c600480360360408110156103a557600080fd5b506001600160a01b038135169060200135610a16565b6102e3600480360360408110156103d157600080fd5b506001600160a01b038135169060200135610a4c565b6102ed600480360360208110156103fd57600080fd5b50356001600160a01b0316610aa9565b6102e36004803603602081101561042357600080fd5b50356001600160a01b0316610ac4565b6103116004803603602081101561044957600080fd5b5035610ad1565b6103116004803603602081101561046657600080fd5b50356001600160a01b0316610afc565b6103116004803603602081101561048c57600080fd5b50356001600160a01b0316610b0e565b610311600480360360408110156104b257600080fd5b506001600160a01b038135169060200135610b29565b6101bb610ceb565b6102e3600480360360408110156104e657600080fd5b506001600160a01b038135169060200135610d4c565b61025c6004803603604081101561051257600080fd5b506001600160a01b038135169060200135610da5565b6103116004803603602081101561053e57600080fd5b5035610df4565b61025c6004803603604081101561055b57600080fd5b506001600160a01b038135169060200135610e19565b6103116004803603602081101561058757600080fd5b50356001600160a01b0316610e26565b610311600480360360408110156105ad57600080fd5b506001600160a01b0381358116916020013516610e7e565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106515780601f1061062657610100808354040283529160200191610651565b820191906000526020600020905b81548152906001019060200180831161063457829003601f168201915b5050505050905090565b6000610668338484610ea9565b5060015b92915050565b60076020908152600092835260408084209091529082529020805460019091015482565b6006546001600160a01b031633146106e5576040805162461bcd60e51b815260206004820152600d60248201526c13db9b1e48185c1c1c9bdd9959609a1b604482015290519081900360640190fd5b600654600160a01b900460ff1615610744576040805162461bcd60e51b815260206004820152600860248201527f4d69677261746564000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600680547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b17908190556001600160a01b03838116911614156107d4576040805162461bcd60e51b815260206004820152601060248201527f496e76616c696420617267756d656e7400000000000000000000000000000000604482015290519081900360640190fd5b6001600160a01b03821661082f576040805162461bcd60e51b815260206004820152601260248201527f5a65726f206164647265737320666f756e640000000000000000000000000000604482015290519081900360640190fd5b6006805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038481169190911790915581166108af576040805162461bcd60e51b815260206004820152601260248201527f5a65726f206164647265737320666f756e640000000000000000000000000000604482015290519081900360640190fd5b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039290921691909117905550565b6005546001600160a01b031681565b60025490565b6006546001600160a01b031681565b6000610910848484610f95565b610962843361095d856040518060600160405280602881526020016118e4602891396001600160a01b038a16600090815260016020908152604080832033845290915290205491906110f0565b610ea9565b5060019392505050565b60055460408051632986c0e560e01b815290516000926001600160a01b031691632986c0e5916004808301926020929190829003018186803b1580156109b157600080fd5b505afa1580156109c5573d6000803e3d6000fd5b505050506040513d60208110156109db57600080fd5b5051905090565b600654600160a01b900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000090565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161066891859061095d9086611187565b6006546001600160a01b03163314610a9b576040805162461bcd60e51b815260206004820152600d60248201526c13db9b1e48185c1c1c9bdd9959609a1b604482015290519081900360640190fd5b610aa582826111e1565b5050565b6009602052600090815260409020546001600160a01b031681565b610ace33826112d1565b50565b600061066c610ade61096c565b610af6610ae96109f2565b859060ff16600a0a61135d565b906113b6565b60086020526000908152604090205481565b6001600160a01b031660009081526020819052604090205490565b6000438210610b695760405162461bcd60e51b815260040180806020018281038252602781526020018061190c6027913960400191505060405180910390fd5b6001600160a01b03831660009081526008602052604090205480610b9157600091505061066c565b6001600160a01b0384166000908152600760209081526040808320600019850184529091529020548310610bf1576001600160a01b038416600090815260076020908152604080832060001990940183529290522060010154905061066c565b6001600160a01b0384166000908152600760209081526040808320838052909152902054831015610c2657600091505061066c565b600060001982015b81811115610cbb576002828203048103610c4661181b565b506001600160a01b03871660009081526007602090815260408083208484528252918290208251808401909352805480845260019091015491830191909152871415610c9c5760200151945061066c9350505050565b8051871115610cad57819350610cb4565b6001820392505b5050610c2e565b506001600160a01b0385166000908152600760209081526040808320938352929052206001015491505092915050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106515780601f1061062657610100808354040283529160200191610651565b6006546001600160a01b03163314610d9b576040805162461bcd60e51b815260206004820152600d60248201526c13db9b1e48185c1c1c9bdd9959609a1b604482015290519081900360640190fd5b610aa582826113f8565b6000610668338461095d8560405180606001604052806025815260200161199d602591393360009081526001602090815260408083206001600160a01b038d16845290915290205491906110f0565b600061066c610e016109f2565b60ff16600a0a610af6610e1261096c565b859061135d565b6000610668338484610f95565b6001600160a01b03811660009081526008602052604081205480610e4b576000610e77565b6001600160a01b0383166000908152600760209081526040808320600019850184529091529020600101545b9392505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b038316610eee5760405162461bcd60e51b81526004018080602001828103825260248152602001806119796024913960400191505060405180910390fd5b6001600160a01b038216610f335760405162461bcd60e51b815260040180806020018281038252602281526020018061187b6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610fda5760405162461bcd60e51b81526004018080602001828103825260258152602001806119546025913960400191505060405180910390fd5b6001600160a01b03821661101f5760405162461bcd60e51b81526004018080602001828103825260238152602001806118366023913960400191505060405180910390fd5b61102a8383836114f4565b6110678160405180606001604052806026815260200161189d602691396001600160a01b03861660009081526020819052604090205491906110f0565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546110969082611187565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561117f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561114457818101518382015260200161112c565b50505050905090810190601f1680156111715780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610e77576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b03821661123c576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611248600083836114f4565b6002546112559082611187565b6002556001600160a01b03821660009081526020819052604090205461127b9082611187565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0380831660008181526009602081815260408084208054858452828620549490935287871673ffffffffffffffffffffffffffffffffffffffff198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a461135782848361152b565b50505050565b60008261136c5750600061066c565b8282028284828161137957fe5b0414610e775760405162461bcd60e51b81526004018080602001828103825260218152602001806118c36021913960400191505060405180910390fd5b6000610e7783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611658565b6001600160a01b03821661143d5760405162461bcd60e51b81526004018080602001828103825260218152602001806119336021913960400191505060405180910390fd5b611449826000836114f4565b61148681604051806060016040528060228152602001611859602291396001600160a01b03851660009081526020819052604090205491906110f0565b6001600160a01b0383166000908152602081905260409020556002546114ac90826116d4565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b038084166000908152600960205260408082205485841683529120546115269291821691168361152b565b505050565b816001600160a01b0316836001600160a01b03161415801561154d5750600081115b15611526576001600160a01b038316156115d3576001600160a01b03831660009081526008602052604081205490816115875760006115b3565b6001600160a01b0385166000908152600760209081526040808320600019860184529091529020600101545b905060006115c182856116d4565b90506115cf86848484611716565b5050505b6001600160a01b03821615611526576001600160a01b0382166000908152600860205260408120549081611608576000611634565b6001600160a01b0384166000908152600760209081526040808320600019860184529091529020600101545b905060006116428285611187565b905061165085848484611716565b505050505050565b600081836116a75760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561114457818101518382015260200161112c565b5060008385816116b357fe5b0490508385816116bf57fe5b068185020185146116cc57fe5b949350505050565b6000610e7783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506110f0565b60008311801561174c57506001600160a01b03841660009081526007602090815260408083206000198701845290915290205443145b15611783576001600160a01b03841660009081526007602090815260408083206000198701845290915290206001018190556117d2565b60408051808201825243815260208082018481526001600160a01b0388166000818152600784528581208982528452858120945185559151600194850155815260089091529190912090840190555b604080518381526020810183905281516001600160a01b038716927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a250505050565b60405180604001604052806000815260200160008152509056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365674f484d3a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656445524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa164736f6c6343000705000a";

export class GOHM__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _migrator: string,
    _sOHM: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GOHM> {
    return super.deploy(_migrator, _sOHM, overrides || {}) as Promise<GOHM>;
  }
  getDeployTransaction(
    _migrator: string,
    _sOHM: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_migrator, _sOHM, overrides || {});
  }
  attach(address: string): GOHM {
    return super.attach(address) as GOHM;
  }
  connect(signer: Signer): GOHM__factory {
    return super.connect(signer) as GOHM__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GOHMInterface {
    return new utils.Interface(_abi) as GOHMInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GOHM {
    return new Contract(address, _abi, signerOrProvider) as GOHM;
  }
}