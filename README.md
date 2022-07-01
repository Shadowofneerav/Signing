## Sign Contracts on Smart Contracts Without Using Your Private Key

### The problem

Signing contracts the traditional ways requires trust
So when we sign a contract the traditional way, how do we know that the other party isn’t going to change up the terms on the contract? And how can we guarantee that the other party will not claim they didn't sign? Do we even want to take that risk?

The answer is pretty clear: NO


### The Idea

Essentially, my project allows you to “sign” contracts without using any private keys. For a better idea, here is how it works:

1. A user goes on the app and “initializes” a contract - writes the contract contents and the recipient's address.

2. The user signs and send the contract to the blockchain.
   
3. The recipient goes on the platform and sees the contract that is meant for them, they are given the option to sign (using their public key) or ignore.


The DApp User Interface when running should look like...

 https://github.com/Shadowofneerav/Signing/blob/master/images/UI.PNG

 

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. Or you can use online ide remix or repl.


Clone this repository:

git clone

-Copy the contract from /Contracts/Create.sol and use Remix IDE to compile the contract and deploy the contract.

-Copy whatever the contract address and abi is present while deploying the smart contract.

1) ABI in below image
 
  https://github.com/Shadowofneerav/Signing/blob/master/images/abi.PNG


2) Deployed address in below image.
 
   https://github.com/Shadowofneerav/Signing/blob/master/images/SmartContractAddress.PNG

-Copy the deployed address and replace in place of smart contract address inside contract.js file.

-To run the application, run the following command in the shell than press run:

node index.js

### Built With 

Ethereum - Ethereum is a decentralized platform that runs smart contracts

### Acknowledgments

*	Solidity
*	Remix
*	Metamask
*	Repl
*	Node js
*	Javascript
