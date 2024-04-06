const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/daVinci.sol/daVinci.json");

const tokenAddress = "0x3456789012345678901234567890123456789012";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x2eFEDE3966b39977Ae5115401546416D56c71625"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("Penguins: " + await token.balanceOf(walletAddress));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
