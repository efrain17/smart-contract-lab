const run = (() => {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8042"));
    const interface = [
        {
            "constant":true,
            "inputs":[],
            "name":"getSuma",
            "outputs" : [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable" : false,
            "stateMutability" : "view",
            "type" : "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "valor",
                    "type": "uint256"
                }
            ],
            "name": "setSuma",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
]
const VotingContract = web3.eth.contract(interface);
const contractInstance = VotingContract.at('0xEcDd4fF0Cf2Ff3f6639d805837d806F4b0E36b1F');
web3.personal.unlockAccount(web3.eth.accounts[0], '1234', 0);})();
