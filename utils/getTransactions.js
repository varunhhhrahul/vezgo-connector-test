const { provider } = require("./provider");
const { ethers } = require("ethers");

exports.getTransactions = async (address) => {
  const history = await provider.getHistory(address);
  const transactions = history.map(({ hash, to, from, value }) => ({
    hash,
    to,
    from,
    value: ethers.utils.formatEther(value),
  }));

  return transactions;
};
