const Migrations = artifacts.require("Migrations");
const Array = artifacts.require("Array");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Array);
};
