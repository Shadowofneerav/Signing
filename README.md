## Sign Contracts on Smart Contracts Without Using Your Private Key

### Current procedure for signing in a Smart Contract

Signing of contract is done using the private key of sender and sender's public key is used to verify the signature.

### Problem

As sender's private key is used it has security risks.

### The Solution

This project allows you to sign your contract without using private keys. This is how it's work:

* First when the user goes to app. He will see the below image. Where user writes the contract contents and the recipient's address.

![This is an image](https://github.com/Shadowofneerav/Signing/blob/master/images/UI.PNG)

* Once the recipient user or the same user goes to the above image page and click on "View your contract button user will be able to view the "Sign the contract button. The user signs and send the contract to the blockchain.

![This is an image](https://github.com/Shadowofneerav/Signing/blob/master/images/Sign%20the%20contract.PNG)

* The recipient can go to contract, they can either sign or ignore it.


 ## Development Procedure

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. Or you can use online ide remix or repl.


Clone this repository:

git clone

-Copy the contract from /Contracts/Create.sol and use Remix IDE to compile the contract and deploy the contract.

-Copy whatever the contract address and abi is present while deploying the smart contract.

1) ABI in below image
 
  ![This is an image](https://github.com/Shadowofneerav/Signing/blob/master/images/abi.PNG)


2) Deployed address in below image.
 
   ![This is an image](https://github.com/Shadowofneerav/Signing/blob/master/images/SmartContractAddress.PNG)

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
