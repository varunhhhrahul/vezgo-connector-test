const { provider } = require("./provider");
const { ethers } = require("ethers");

/**
 * get All transactions for given wallet address
 * @param   {String} address [address of wallet]
 * @return {{
 * from: string,
 * to: string,
 * value: string,
 * hash: string,
 * }[]}     [Array of transaction object]
 */

exports.getTransactions = async (address) => {
  try {
    const history = await provider.getHistory(address);
    const transactions = history.map(({ hash, to, from, value }) => ({
      hash,
      to,
      from,
      value: ethers.utils.formatEther(value),
    }));

    return transactions;
  } catch (error) {
    console.error(error);
  }
};
