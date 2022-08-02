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

app.use(cors());
app.use(express.json());

if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider); 
} else {
        var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
}

async function main() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)
    console.log(CONTACT_ADDRESS.CONTACT_ADDRESS)
    const storageContract = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);
    //console.log(storageContract)
    
    storageContract.methods.store(888).send({from: accounts[0]}).then((f) => console.log(f))

    /*routes(app, accounts, storageContract);
    app.listen(process.env.PORT || 3001, () => {
        console.log('listening on port '+ (process.env.PORT || 3001));
    });*/
}
main()