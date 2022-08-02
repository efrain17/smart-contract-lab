const Contacts = artifacts.require("./Storage.sol");

module.exports = function(deployer) {
  deployer.deploy(Contacts);
};