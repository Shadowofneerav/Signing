var SmartContractABI=
[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_text",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_dest",
				"type": "address"
			}
		],
		"name": "depot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "signit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "initiator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "cossigne",
				"type": "address"
			}
		],
		"name": "tosign",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_coassignee",
				"type": "address"
			}
		],
		"name": "checkcosignee",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_init",
				"type": "address"
			}
		],
		"name": "checkinitiator",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_coassignee",
				"type": "address"
			}
		],
		"name": "isdepot",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var SmartContractAddress="0xEcd32964784ab5D5e59927D350CcA360D8C15539";

