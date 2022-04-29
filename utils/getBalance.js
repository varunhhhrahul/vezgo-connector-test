const { ethers } = require("ethers");
const { provider } = require("./provider");

/**
 * get balance for given wallet address
 * @param   {String} address [address of wallet]
 * @return {String}     [Balance in eth of wallet]
 */

exports.getBalance = async (address) => {
  const balance = await provider.getBalance(address);
  return ethers.utils.formatEther(balance);
};
