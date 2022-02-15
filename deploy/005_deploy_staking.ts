import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {
    CONTRACTS,
    EPOCH_LENGTH_IN_BLOCKS,
    FIRST_EPOCH_TIME,
    FIRST_EPOCH_NUMBER,
    BOUNTY,
} from "../deploy_script/constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const authority = await deployments.get(CONTRACTS.authority);
    const treasury = await deployments.get(CONTRACTS.treasury);
    const ohm = await deployments.get(CONTRACTS.ohm);
    const sohm = await deployments.get(CONTRACTS.sOhm);
    const gohm = await deployments.get(CONTRACTS.gOhm);

    const staking = await deploy(CONTRACTS.staking, {
        from: deployer,
        args: [
            ohm.address,
            sohm.address,
            gohm.address,
            EPOCH_LENGTH_IN_BLOCKS,
            FIRST_EPOCH_NUMBER,
            FIRST_EPOCH_TIME,
            authority.address,
        ],
        log: true,
    });
    // sohm.initialize(staking.address, treasury.address);
    // gohm.migrate(staking.address, sohm.address);

    // // Give the treasury permissions to mint
    // authority.pushVault(treasury.address, true);

    // // Deposit a token who's profit (3rd param) determines how much ohm the treasury can mint
    // const depositAmount = 20e18;
    // treasury.deposit(depositAmount, deployer, BOUNTY*2); // Mints (depositAmount- 2xBounty) for this contract

};


func.tags = [CONTRACTS.staking, "staking"];
func.dependencies = [CONTRACTS.ohm, CONTRACTS.sOhm, CONTRACTS.gOhm, CONTRACTS.authority];

export default func;
