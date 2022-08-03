const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const Web3 = require('web3');
const mongodb = require('mongodb').MongoClient;
const contract = require('@truffle/contract');
const artifacts = require('../build/contracts/Storage.json');
const CONTACT_ABI = require('./config');
const CONTACT_ADDRESS = require('./config');
const Tx = require('ethereumjs-tx').Transaction

app.use(cors());
app.use(express.json());

if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider); 
} else {
        var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/32e0d420ae2145b3b14a73b621de2b95'));
}

async function main() {
    //const accounts = await web3.eth.accounts.create()
    //console.log(accounts)
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)
    
    console.log(CONTACT_ADDRESS.CONTACT_ADDRESS)
    const storageContract = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);

    //console.log(storageContract)
    
    storageContract.methods.store(888).send({from: "0x8B37ad61AcAD868a556b719Fd0d3702760381D78"}).then((f) => console.log(f))
    
    /*routes(app, accounts, storageContract);
    app.listen(process.env.PORT || 3001, () => {
        console.log('listening on port '+ (process.env.PORT || 3001));
    });*/
}

function usingLockAccount() {
    const account1 = '0x8B37ad61AcAD868a556b719Fd0d3702760381D78'
    const PRIVATE_KEY = '0x6c187825f68d502467b0b1e4b128d75999963e9e71b4acfb6e70f850c9b1d33c'
    const privateKey1 = Buffer.from('6c187825f68d502467b0b1e4b128d75999963e9e71b4acfb6e70f850c9b1d33c', 'hex')
    console.log(privateKey1)
    const storageContract = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);

    const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

    var tx = {
        from: account.address,
        to: CONTACT_ADDRESS.CONTACT_ADDRESS,
        gas: 2000000,
        data: storageContract.methods.store(999).encodeABI()
    };
    console.log("Account Address:", account.address);

    account.signTransaction(tx).then(signed => {
        var tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
        console.log("Raw Signed Transaction:", signed.rawTransaction);
    });
    
    // web3.eth.getTransactionCount(account1, (err, txCount) => {
    //     const txObject = {
    //         nonce:    web3.utils.toHex(txCount),
    //         gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
    //         gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    //         to: CONTACT_ADDRESS.CONTACT_ADDRESS,
    //         data: storageContract.methods.store(999).encodeABI()
    //     }
        
    //     const tx = new Tx(txObject)
    //     tx.sign(privateKey1)
        
    //     const serializedTx = tx.serialize()
    //     const raw = '0x' + serializedTx.toString('hex')
        
    //     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    //         console.log('err:', err, 'txHash:', txHash)
    //         // Use this txHash to find the contract on Etherscan!
    //     })
    // })

}

async function invokeContractData() {
    const storageContract = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);
    const userItems = await storageContract.methods.retrieve().call();
    console.log(userItems)
}

invokeContractData()