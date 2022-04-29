# Vezgo Connector Test

Varun X Vezgo

Problem Statement: [https://github.com/wealthica/trial-task](https://github.com/wealthica/trial-task)

## Demo Video

[Demo Video](https://drive.google.com/file/d/1AR44tKEsCS38KkAP-9xIQT0z7XtbZxSx/view?usp=sharing)

- Checkout [output.json](output.json) file for sample output.

## Tools Used

- [Ether.js](https://docs.ethers.io/v5/) - To get the account balance for wallet address. I prefer Ethers.js because it is smaller, well-proven, well-documented, well-maintained, and less bug-ridden in comparison to the other libraries like web3.js.
- [Nodejs](https://nodejs.org/en/) - To write the scripts
- [Axios](https://www.npmjs.com/package/axios) - To call the covalent api
- [Covalent HQ](https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1) - To get positions (token details, balance, amount in USD) for the current wallet address. I prefer this because it is free and easy to use with very handy documentation for developers.

## Installation

Install with npm

```bash
  git clone https://github.com/varunhhhrahul/vezgo-connector-test
  cd vezgo-connector-test
  npm install
  node index.js --wallet 0x8ba1f109551bD432803012645Ac136ddd64DBA72
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Generate new api key: [https://etherscan.io/myapikey](https://etherscan.io/myapikey)

`ETHERSCAN_API_KEY`

Get a new key for COVALENT API `https://www.covalenthq.com/platform/#/auth/register/`

`COVALENT_API_KEY`

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@varunhhhrahul](https://github.com/varunhhhrahul)
