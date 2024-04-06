const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/Penguin.sol/Penguin.json');
require('dotenv').config();

async function main() {
 
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const Penguin_ctr = await ethers.getContractFactory("Penguin");
  const ctr = await Penguin_ctr .attach('0x2a09B6fF8a15C317c7a8e319c1F1fAf873b08D9F');//example contract address

  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const approveTx = await ctr.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('5 Penguins approved');

const mapIDs=[0,1,2,3,4];
  for (let i = 0; i < 5; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      ctr.address,
      wallet.address, 
      mapIDs[i],
      '0x6566'
    );

    await depositTx.wait();
  }

  console.log("5 Penguins deposited");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
