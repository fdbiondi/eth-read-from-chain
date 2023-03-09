// read ether balance from wallet
const ethers = require("ethers");
const provider = new ethers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/0286c7fdeba14916816dc06544acc94f"
);

async function init() {
  // can use address
  const balance = await provider.getBalance("vitalik.eth");
  const formattedBalance = ethers.formatEther(balance);
  console.log(`Ether balance of Vitalik: ${formattedBalance}`);
}

init();
