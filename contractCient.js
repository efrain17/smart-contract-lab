var testContract = web3.eth.contract([
  {
    "constant":true,
    "inputs":[],
    "name":"getSuma",
    "outputs":[{"name":"","type":"uint256"}],
    "payable":false,"stateMutability":"view","type":"function"},
    {"constant":false,"inputs":[{"name":"valor","type":"uint256"}],
    "name":"setSuma","outputs":[],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
    },
    {
      "inputs":[],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"constructor"
    }
  ]
);
var test = testContract.new(
   {
    from: web3.eth.accounts[0],
    data: `0x608060405234801561001057600080fd5b5060f18061001f6000396000f3006080604052
    600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463fff
    fffff16806374dcbe7014604e578063b34c1f9f146076575b600080fd5b348015605957600080fd5b50606060
    a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e60048036038
    10190808035906020019092919050505060a9565b005b60008054905090565b60008111151560b757600080fd
    5b8060005401600081905550505600a165627a7a7230582031fb6d7b5e7e239c93745476bc4a42a17eb9ba6d4
    f4721b3758f3ce8aa954c210029`,
    gas: '4700000'
  }, function (e, contract){
 console.log(e, contract);
 if (typeof contract.address !== 'undefined') {
     console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
 }
})
