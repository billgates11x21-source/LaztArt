const hre = require("hardhat");

async function main() {
  const address = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
  await hre.run("verify:verify", {
    address,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
