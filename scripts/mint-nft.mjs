const CONTRACT_ADDRESS = "0xAA9269499F2b0E43F1CC140a113d005846b7d4C6"
const META_DATA_URL = "ipfs://bafyreicy4kjie4w3q3qpcs4akos62rovjxtjvaie7ubq4e746dcorqiwdy/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });