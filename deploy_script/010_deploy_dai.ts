import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS } from "../scripts_backup/constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = 4;
    await deploy(CONTRACTS.DAI, {
        from: deployer,
        args: [chainId],        
        log: true,
        skipIfAlreadyDeployed: true,
    });
};

func.tags = [CONTRACTS.ohm, "staking", "tokens"];
func.dependencies = [CONTRACTS.authority];
export default func;
