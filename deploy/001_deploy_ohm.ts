import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS } from "../deploy_script/constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const authority = await deployments.get(CONTRACTS.authority);

    await deploy(CONTRACTS.ohm, {
        from: deployer,
        args: [authority.address],
        log: true,
        skipIfAlreadyDeployed: true,
    });
};

func.tags = [CONTRACTS.ohm, "staking", "tokens"];
func.dependencies = [CONTRACTS.authority];
export default func;
