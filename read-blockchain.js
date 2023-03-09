const ethers = require("ethers");
const provider = new ethers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/0286c7fdeba14916816dc06544acc94f"
);

async function init() {
  const blockNumber = await provider.getBlockNumber();
  console.log(`Current block number: ${blockNumber}`);
}

init();
