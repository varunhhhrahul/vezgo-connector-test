const { ethers } = require("ethers");

exports.provider = new ethers.providers.EtherscanProvider(
  "ropsten",
  process.env.ETHERSCAN_API_KEY
);
