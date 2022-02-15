import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS, TREASURY_TIMELOCK, STATUS } from "../deploy_script/constants";
//import { DAI, FRAX, OlympusERC20Token, OlympusTreasury } from "../types";
// import { OlympusTreasury__factory } from "../contracts/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    
    const { deployments, getNamedAccounts, ethers } = hre;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const signer = await ethers.provider.getSigner(deployer);

    const ohm = await deployments.get(CONTRACTS.ohm);

    const authority = await deployments.get(CONTRACTS.authority);

    // TODO: TIMELOCK SET TO 0 FOR NOW, CHANGE FOR ACTUAL DEPLOYMENT
    const treasury = await deploy(CONTRACTS.treasury, {
        from: deployer,
        args: [ohm.address, TREASURY_TIMELOCK, authority.address],
        log: true,
        skipIfAlreadyDeployed: true,
    });
    // authority.pushVault(treasury.address, true);
    // treasury.enable(STATUS.RESERVEDEPOSITOR, deployer, 0); // Allow this contract to deposit token into treeasury

};

func.tags = [CONTRACTS.treasury, "treasury"];
func.dependencies = [CONTRACTS.ohm];

export default func;
