// read ether balance
const ethers = require("ethers");
const provider = new ethers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/0286c7fdeba14916816dc06544acc94f"
);

const usdcAbi = [
  "function balanceOf(address) view returns (uint)",
  "function decimals() view returns (uint)",
];


const usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
// interface of the smart contract
const usdc = new ethers.Contract(usdcAddress, usdcAbi, provider);

async function init() {
  const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
  const balance = await usdc.balanceOf(address);
  const decimals = await usdc.decimals();
  const formattedBalance = ethers.formatUnits(balance, decimals);

  console.log(`USDC Balance of Vitalik: ${formattedBalance}`);
}

init();
