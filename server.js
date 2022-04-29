const axios = require("axios");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { getBalance } = require("./utils/getBalance");
const { getTransactions } = require("./utils/getTransactions");
const { getPosition } = require("./utils/getPosition");

dotenv.config({
  path: path.join(__dirname, "config", "config.env"),
});

const main = async () => {
  if (process.argv[2] === "--wallet") {
    if (process.argv[2] === "--wallet" && process.argv[3].length === 42) {
      return {
        balance: await getBalance(process.argv[3]),
        position: await getPosition(process.argv[3]),
        transactions: await getTransactions(process.argv[3]),
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

main().then((response) => {
  console.log(res);

  fs.writeFileSync("output.json", JSON.stringify(res, null, 4));
});
