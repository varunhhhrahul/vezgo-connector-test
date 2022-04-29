const { ethers } = require("ethers");
const axios = require("axios");
const INFURA_ID = "b9e4fdb5cb8f4d73b7778b0246582d62";

const END_POINT = `https://mainnet.infura.io/v3/${INFURA_ID}`;

const API_KEY = "TDQUKBHPCRP2CT2HPB8DQYNQN5UFX9BR5X";

const provider = new ethers.providers.EtherscanProvider("ropsten", API_KEY);

const address = "0x8ba1f109551bD432803012645Ac136ddd64DBA72";
const COVALENT_API_KEY = "ckey_7d61c1f3df8f4d5196f35c04e39";
const main = async () => {
  // console.log(process.argv);

  if (process.argv[2] === "--wallet") {
    if (process.argv[2] === "--wallet" && process.argv[3].length === 42) {
      const balance =
        // await provider.getBalance(address);
        await provider.getBalance(process.argv[3]);
      const history = await provider.getHistory(process.argv[3]);
      // await provider.getHistory(address);

      const res = await axios({
        method: "get",
        url: `https://api.covalenthq.com/v1/1/address/${address}/transfers_v2/?quote-currency=USD&format=JSON&contract-address=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&key=${COVALENT_API_KEY}`,
      });

      const positionsArray = res.data.data.items.map((item) => {
        const transfers = item.transfers;
        const data = transfers.map((transfer) => {
          return {
            symbol: transfer.contract_ticker_symbol,
            name: transfer.contract_name,
            amount: ethers.utils.formatEther(item.value),
          };
        });
        return data;
      });
      const position = [];

      for (let item of positionsArray) {
        position.push(...item);
      }

      // await provider.getHistory(process.argv[3]);
      // const tokes = await provider.
      const transactions = history.map(({ hash, to, from, value }) => ({
        hash,
        to,
        from,
        value: ethers.utils.formatEther(value),
      }));

      return {
        balance: ethers.utils.formatEther(balance),
        position,
        transactions,
      };
    } else {
      throw Error("Invalid wallet address");
    }
  } else {
    throw Error(
      "Please provide a wallet argument followed by a wallet address"
    );
  }
};

main().then((res) => console.log(res));
