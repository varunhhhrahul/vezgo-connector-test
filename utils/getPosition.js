const axios = require("axios");
const { ethers } = require("ethers");

/**
 * get position for given wallet address
 * @param   {String} address [address of wallet]
 * @return {{
 * symbol: String,
 * quote_price: Number,
 * quantity: string,
 * }[]}     [Array of position object]
 */

exports.getPosition = async (address) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.COVALENT_API_KEY}`,
    });

    const position = res.data.data.items
      .filter((item) => {
        return (
          item.supports_erc === null ||
          (item.supports_erc && item.supports_erc.includes("erc20"))
        );
      })
      .map((item) => {
        return {
          symbol: item.contract_ticker_symbol,
          quote_price: item.quote_rate ? `$${item.quote_rate}` : null,
          quantity: ethers.utils.formatUnits(
            item.balance,
            item.contract_decimals
          ),
        };
      });
    return position;
  } catch (err) {
    console.error(error);
  }
};
