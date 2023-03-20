require("@nomicfoundation/hardhat-toolbox");

const ALCEMY_API_KEY = "";

const GOERLI_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli:{
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    }
  }
};
