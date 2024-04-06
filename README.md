# Penguin Transfer

In this project , 5 Penguins have been transferred from one testnet to another . 
- The testnets used - Goerli to Mumbai.
- We have used Microsoft Designer to generate 5 images
- The prompt used - "penguin in a desert sipping juice"
- The ipfs link -"https://gateway.pinata.cloud/ipfs/QmavyhdbXQE5GKokU3YAi2C661nxi18vAxvWetG5kGH7qi"
- IPFS storage - pinata cloud


### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance

## Authors

Rajiv C Gowda
[rajivgowda17@gmail.com]

## License

This project is licensed under the [MIT] License
