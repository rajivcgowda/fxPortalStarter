const hre = require("hardhat");

async function main() {

  const penguin_ctr = await hre.ethers.getContractFactory("Penguin");
  const ctr=await penguin_ctr.deploy();
  await ctr.deployed();

  console.log("Address of Penguin:", ctr.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
