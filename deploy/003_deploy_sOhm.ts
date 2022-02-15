import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS } from "../deploy_script/constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const sohm = await deploy(CONTRACTS.sOhm, {
        from: deployer,
        log: true,
        skipIfAlreadyDeployed: true,
    });
    // sohm.setIndex(10);
    // const gohm =  await deployments.get(CONTRACTS.gOhm);
    // sohm.setgOHM(gohm.address);
};

func.tags = [CONTRACTS.ohm, "staking", "tokens"];
export default func;
