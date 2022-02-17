import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {
    CONTRACTS,
} from "../constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const authorityDeployment = await deployments.get(CONTRACTS.authority);
    const ohmDeployment = await deployments.get(CONTRACTS.ohm);
    const sOhmDeployment = await deployments.get(CONTRACTS.sOhm);
    const gOhmDeployment = await deployments.get(CONTRACTS.gOhm);
    const stakingDeploment = await deployments.get(CONTRACTS.staking);
    const treasuryDeploment = await deployments.get(CONTRACTS.treasury);

    await deploy(CONTRACTS.bondDepo, {
        from: deployer,
        args: [
            authorityDeployment.address,
            ohmDeployment.address,
            gOhmDeployment.address,
            stakingDeploment.address,
            treasuryDeploment.address,
        ],
        log: true,
    });
};

func.tags = [CONTRACTS.bondDepo, "bondDepo"];
func.dependencies = [CONTRACTS.authority, CONTRACTS.ohm, CONTRACTS.sOhm, CONTRACTS.gOhm, CONTRACTS.staking, CONTRACTS.treasury];

export default func;
