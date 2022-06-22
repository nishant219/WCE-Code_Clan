const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "garden inherit fun surface lobster answer make hat nerve dream beauty rebuild";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    // Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Mainnet address and Token
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/f0178077c3874af28a65a5f36f296f2f")
      },
      network_id: "1"
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/f0178077c3874af28a65a5f36f296f2f")
      },
      // Network id is 4 for Rinkeby
      network_id: 4
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }

};