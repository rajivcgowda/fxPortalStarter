const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x2a09B6fF8a15C317c7a8e319c1F1fAf873b08D9F";

  const penguin_ctr = await ethers.getContractFactory("daVinci", signer);
  const ctr = await penguin_ctr.attach(contractAddress);

  await ctr.mint(5);
  console.log("5 Penguins have been minted");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
