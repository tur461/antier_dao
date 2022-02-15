import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS } from "../deploy_script/constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const BOUNTY = 42;

    const treasury = await deployments.get(CONTRACTS.treasury);
    const ohm = await deployments.get(CONTRACTS.ohm);
    const staking = await deployments.get(CONTRACTS.staking);
    const authority = await deployments.get(CONTRACTS.authority);

    // TODO: firstEpochBlock is passed in but contract constructor param is called _nextEpochBlock
    const distributor = await deploy(CONTRACTS.distributor, {
        from: deployer,
        args: [
            treasury.address,
            ohm.address,
            staking.address,
            authority.address,
        ],
        log: true,
    });
    // staking.setDistributor(distributor.address);
    // distributor.setBounty(BOUNTY);
};

func.tags = [CONTRACTS.distributor, "distributor"];
func.dependencies = [
    CONTRACTS.treasury,
    CONTRACTS.ohm,
    CONTRACTS.bondingCalculator,
    CONTRACTS.olympusAuthority,
];

// treasury.enable(STATUS.REWARDMANAGER, distributor.address, 0); // Allows distributor to mint ohm.

export default func;
