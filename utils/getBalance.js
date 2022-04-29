const { ethers } = require("ethers");
const { provider } = require("./provider");

exports.getBalance = async (address) => {
  const balance = await provider.getBalance(address);
  return ethers.utils.formatEther(balance);
};
