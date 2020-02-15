const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const infura_key = fs.readFileSync("../.infura").toString().trim();

let environment = process.argv[2], network_id, endpoint, private_key;

if (environment === 'rinkeby') {
	network_id = '4';
	endpoint = 'https://rinkeby.infura.io/v3/' + infura_key;
	private_key = fs.readFileSync("../.secret.rinkeby.key").toString().trim();
} else if (environment === 'testnet') {
	network_id = '1581731654063';
	endpoint = 'http://localhost:8546';
	private_key = fs.readFileSync("../.secret.testnet.key").toString().trim();
} else if (environment === 'mainnet') {
	network_id = '1';
	endpoint = 'https://mainnet.infura.io/v3/' + infura_key;
	private_key = fs.readFileSync("../.secret.mainnet.key").toString().trim();
} else {
	console.error("Invalid environment:", environment);
	process.exit();
}

const provider = new HDWalletProvider(private_key, endpoint);

const abiCK = [{"constant": true,"inputs": [{"name": "_interfaceID","type": "bytes4"}],"name": "supportsInterface","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "cfoAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_tokenId","type": "uint256"},{"name": "_preferredTransport","type": "string"}],"name": "tokenMetadata","outputs": [{"name": "infoUrl","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "promoCreatedCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_to","type": "address"},{"name": "_tokenId","type": "uint256"}],"name": "approve","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "ceoAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "GEN0_STARTING_PRICE","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_address","type": "address"}],"name": "setSiringAuctionAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "pregnantKitties","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_kittyId","type": "uint256"}],"name": "isPregnant","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "GEN0_AUCTION_DURATION","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "siringAuction","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_from","type": "address"},{"name": "_to","type": "address"},{"name": "_tokenId","type": "uint256"}],"name": "transferFrom","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_address","type": "address"}],"name": "setGeneScienceAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_newCEO","type": "address"}],"name": "setCEO","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_newCOO","type": "address"}],"name": "setCOO","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_kittyId","type": "uint256"},{"name": "_startingPrice","type": "uint256"},{"name": "_endingPrice","type": "uint256"},{"name": "_duration","type": "uint256"}],"name": "createSaleAuction","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "sireAllowedToAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_matronId","type": "uint256"},{"name": "_sireId","type": "uint256"}],"name": "canBreedWith","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "kittyIndexToApproved","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_kittyId","type": "uint256"},{"name": "_startingPrice","type": "uint256"},{"name": "_endingPrice","type": "uint256"},{"name": "_duration","type": "uint256"}],"name": "createSiringAuction","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "val","type": "uint256"}],"name": "setAutoBirthFee","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_addr","type": "address"},{"name": "_sireId","type": "uint256"}],"name": "approveSiring","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_newCFO","type": "address"}],"name": "setCFO","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_genes","type": "uint256"},{"name": "_owner","type": "address"}],"name": "createPromoKitty","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "secs","type": "uint256"}],"name": "setSecondsPerBlock","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "paused","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_tokenId","type": "uint256"}],"name": "ownerOf","outputs": [{"name": "owner","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "GEN0_CREATION_LIMIT","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "newContractAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_address","type": "address"}],"name": "setSaleAuctionAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "count","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "secondsPerBlock","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "pause","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_owner","type": "address"}],"name": "tokensOfOwner","outputs": [{"name": "ownerTokens","type": "uint256[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_matronId","type": "uint256"}],"name": "giveBirth","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "withdrawAuctionBalances","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "cooldowns","outputs": [{"name": "","type": "uint32"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "kittyIndexToOwner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_to","type": "address"},{"name": "_tokenId","type": "uint256"}],"name": "transfer","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "cooAddress","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "autoBirthFee","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "erc721Metadata","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_genes","type": "uint256"}],"name": "createGen0Auction","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_kittyId","type": "uint256"}],"name": "isReadyToBreed","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "PROMO_CREATION_LIMIT","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_contractAddress","type": "address"}],"name": "setMetadataAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "saleAuction","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_sireId","type": "uint256"},{"name": "_matronId","type": "uint256"}],"name": "bidOnSiringAuction","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"constant": true,"inputs": [],"name": "gen0CreatedCount","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "geneScience","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_matronId","type": "uint256"},{"name": "_sireId","type": "uint256"}],"name": "breedWithAuto","outputs": [],"payable": true,"stateMutability": "payable","type": "function"},{"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"payable": true,"stateMutability": "payable","type": "fallback"},{"anonymous": false,"inputs": [{"indexed": false,"name": "owner","type": "address"},{"indexed": false,"name": "matronId","type": "uint256"},{"indexed": false,"name": "sireId","type": "uint256"},{"indexed": false,"name": "cooldownEndBlock","type": "uint256"}],"name": "Pregnant","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "from","type": "address"},{"indexed": false,"name": "to","type": "address"},{"indexed": false,"name": "tokenId","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "owner","type": "address"},{"indexed": false,"name": "approved","type": "address"},{"indexed": false,"name": "tokenId","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "owner","type": "address"},{"indexed": false,"name": "kittyId","type": "uint256"},{"indexed": false,"name": "matronId","type": "uint256"},{"indexed": false,"name": "sireId","type": "uint256"},{"indexed": false,"name": "genes","type": "uint256"}],"name": "Birth","type": "event"},{"anonymous": false,"inputs": [{"indexed": false,"name": "newContract","type": "address"}],"name": "ContractUpgrade","type": "event"},{"constant": false,"inputs": [{"name": "_v2Address","type": "address"}],"name": "setNewAddress","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "_id","type": "uint256"}],"name": "getKitty","outputs": [{"name": "isGestating","type": "bool"},{"name": "isReady","type": "bool"},{"name": "cooldownIndex","type": "uint256"},{"name": "nextActionAt","type": "uint256"},{"name": "siringWithId","type": "uint256"},{"name": "birthTime","type": "uint256"},{"name": "matronId","type": "uint256"},{"name": "sireId","type": "uint256"},{"name": "generation","type": "uint256"},{"name": "genes","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "unpause","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "withdrawBalance","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_matronId","type": "uint256"},{"name": "_sireId","type": "uint256"},{"name": "_generation","type": "uint256"},{"name": "_genes","type": "uint256"},{"name": "_owner","type": "address"}],"name": "createKitty","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "nonpayable","type": "function"}];
const contract_addressCK = "0xa751b62893867d0608a2ada5d17d0c43e3433040";

const contractJsonWCKString = fs.readFileSync("../build/contracts/WrappedCK.json").toString().trim();
const contractJsonWCK = JSON.parse(contractJsonWCKString);

const abiWCK = contractJsonWCK.abi;
const contract_addressWCK = contractJsonWCK.networks[network_id].address;
const addressWrappedCK = contract_addressWCK;

const contractJsonDKString = fs.readFileSync("../build/contracts/DragonKitty.json").toString().trim();
const contractJsonDK = JSON.parse(contractJsonDKString);

const abiDK = contractJsonDK.abi;
const contract_addressDK = contractJsonDK.networks[network_id].address;
const addressDragonKitty = contract_addressDK;

const web3 = new Web3(provider);
const contractKittyCore = new web3.eth.Contract(abiCK, contract_addressCK);
const contractWrappedCK = new web3.eth.Contract(abiWCK, contract_addressWCK);
const contractDragonKitty = new web3.eth.Contract(abiDK, contract_addressDK);

async function getOwner() {
	account = await web3.eth.getAccounts();
	return account[0];
}

module.exports = {
	getOwner,
	addressWrappedCK,
	addressDragonKitty,
	contractWrappedCK,
	contractKittyCore,
	contractDragonKitty
}
