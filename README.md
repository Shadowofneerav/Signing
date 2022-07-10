## Sign Contracts on Smart Contracts Without Using Your Private Key

### Sign a Transaction Overview

After creating a transaction there's a few things to consider.

 *How do we know it's valid?
 *Who owns the transaction?
 
We validate transactions and assign ownership using what's known as a digital signature.

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

### Limitations as of now

* The current smart contract does not support multiline contract : If user try input a multiline contract it will turn into single line. There are couple of ways for solving it. We are working on it.

* The smart contract does not support more than one contract per user: 

* Current user interface needs some work.


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

*	Solidity : A high level language for coding and deploying smart contracts.
*	Remix : A browser based IDE that allows you to write Solidity and deploy solidity contracts.
*	Metamask : Browser based plug-in that allows you to carry out Ethereum transactions.
*	Repl : A browser based IDE used to create websites and make them live.
*	Node js :Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications
*	Javascript : It works along side HTML and CSS. It is used to manipulate the behaviour when client uses the website.
