// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Penguin is ERC721A{

    address public owner;
    string baseUrl="https://gateway.pinata.cloud/ipfs/QmavyhdbXQE5GKokU3YAi2C661nxi18vAxvWetG5kGH7qi";
    uint256 public max;
    string public prompt_description ;

    constructor() ERC721A("Penguin", "PG") {
        owner = msg.sender;
        prompt_description ="penguin in a desert sipping juice";
        max = 5;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        
        _;
    }

    function mint(uint256 mint_amt) external payable onlyOwner{
        if(totalSupply() + mint_amt > max){
         revert ("Exceeded Max Limit");
        } 
        _mint(msg.sender, mint_amt);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt_description;
    }
}
