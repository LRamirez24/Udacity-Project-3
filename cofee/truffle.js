
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "a3e2f5bfde2147d8ad1cd2ab2828ccf4";

// rinkbey contract address = 0x5a9f2E5AC13410C81Ad7c1c4aD92794BDD18c2e5 
//
// const fs = require('fs');
const mnemonic = "mean quick position whale enact flame sheriff pupil text lumber service ramp";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {  
      version: "^0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};

// Configure your compilers

