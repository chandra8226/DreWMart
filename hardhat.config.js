require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */

// const ALCHEMY_API_KEY = 'qMa3nKY8ICD7FK74yQfPUDCQqgn4i4He';
const GOERLI_PRIVATE_KEY = 'b0dae4f75233896f6a479163f31370dc87bdbb10b136fa447e72c7c1c96dc7fe';

module.exports = {
  solidity: '0.8.16',
  paths: {
    artifacts: './src/artifacts',
  },
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qMa3nKY8ICD7FK74yQfPUDCQqgn4i4He',
      accounts: [`${GOERLI_PRIVATE_KEY}`],
    },
  },
};
