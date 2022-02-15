import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS } from "../constants";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    // For Liquity addresses:
    // mainnet: https://github.com/liquity/dev/blob/main/packages/contracts/mainnetDeployment/realDeploymentOutput/output14.txt
    // rinkeby: https://github.com/liquity/dev/blob/main/packages/contracts/mainnetDeployment/rinkebyDeploymentOutput.json

    const authorityDeployment = await deployments.get(CONTRACTS.authority);
    const treasuryDeployment = await deployments.get(CONTRACTS.treasury);
    const lusdTokenAddress = "0x9c5ae6852622dde455b6fca4c1551fc0352531a3";
    const lqtyToken = "0xf74dcabea0954aeb6903c8a71d41e468a6b77357";
    const stabilityPool = "0xFd0dB2BA8BEaC72d45f12A76f40c345BBf5f6F8d";
    const stakingPool = "0x35D3293EA6dD210b8Ca25668ae266ca4C834Ea1b";
    const weth = "0xc778417e063141139fce010982780140aa0cd5ab";
    const hopTokenAddress = "0x95b58a6bff3d14b7db2f5cb5f0ad413dc2940658"; // DAI

    await deploy(CONTRACTS.lusdAllocator, {
        from: deployer,
        args: [
            authorityDeployment.address,
            treasuryDeployment.address,
            lusdTokenAddress,
            lqtyToken,
            stabilityPool,
            stakingPool,
            "0x0000000000000000000000000000000000000000",
            weth,
            hopTokenAddress,
            "0x0000000000000000000000000000000000000000",
        ],
        log: true,
    });
};

func.tags = [CONTRACTS.distributor, "lusdallocator"];
func.dependencies = [CONTRACTS.treasury];

export default func;
