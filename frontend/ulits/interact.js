const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
import { config } from '../dapp.config'

const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL)
const contract = require('../artifacts/contracts/GREATROBOTS.json')
const nftContract = new web3.eth.Contract(contract.abi, config.contractAddress)



export const getTotalMinted = async () => {
  const totalMinted = await nftContract.methods.totalSupply().call()
  return totalMinted
}


export const getMaxSupply = async () => {
  const MAX_NFT_SUPPLY = await nftContract.methods.nextTokenIdToMint().call()
  return MAX_NFT_SUPPLY
}



