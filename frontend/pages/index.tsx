import React from "react";
import SecurityBg from "../public/home_banner.png";
import Image from "next/image";
import laptop from "../public/home_games.png";
import shape from "../public/home_blockchain.png";
import contoller from "../public/home_controller.png";
import nfthouse from "../public/home_marketplace.png";
import homeads from "../public/home_ads.png";
export default function Homeppage() {
  return (
    <div className="bghero">
      {" "}
      <div className="homepg ">
        <div className="herobanner">
          <Image src={SecurityBg} className="hero_img" alt="hero" />
        </div>
        <div
          className="container mx-auto"
          // style={{
          //   backgroundImage: `url(${SecurityBg.src})`,
          //   height: "110vh",
          // }}
        >
          <div className=" sectionhero ">
            {/*banner + btn */}
            <div
              className="textbtn"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="textbtn2">
                <div className="textin">
                  <button className="btntext">FULL GAMES</button>
                  <button className="btntext">LAYER 1 </button>
                </div>

                <div className="textin">
                  <button className="btntext">SOCIAL LOGIN</button>
                  <button className="btntext">FREE TO PLAY</button>
                </div>
              </div>
            </div>
            {/* banner + btn end */}
          </div>
        </div>

        <div
          className="section2 topp"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="section2text">
            <div className="textgame"
            
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            
            >
              <h1 className="txb" >32 mobile & pc games</h1>
              <p className="txp">
                Large libraary of studio games inspired by the very best games
                of all time such as COD, Fall Guys, Space Invaders, Dynasty
                Warriors & Diablo. We will generate revenue from adverts and
                share that with players.
                <br />
                <br />
                Our players can just focus on having fun and not need to know
                anything about blockchain technologhy unless they want to.
              </p>
              <button className="txbb">More</button>
            </div>
            <Image
              data-aos="fade-right"
              // data-aos="zoom-in-up"
              src={laptop}
              alt="laptop"
              className="laptop"
            />
          </div>
        </div>

        <div
          className="section2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="section2text">
            <Image
              src={shape}
              data-aos="fade-right"
              alt="laptop"
              className="laptop"
            />
            <div className="textgame">
              <h1 className="txb">LAYER 1 BLOCKCHAIN</h1>
              <p className="txp">
                EVM blockchain to run all the games and dapps in our ecosystem
                and fully compatible with Ethereum, Avalanche, BSC, Fantom, etc.
                <br />
                <br />
                There will be a maximum of 30k nodes of which 25k will be
                available to the public to operate and earn $XSEED tokens.
                <br />
                <br />
                The node licence are on sale now.
              </p>
              <button className="txbb">More</button>
            </div>
          </div>
        </div>

        <div
          className="section2"
   
          
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="section2text">
            <div className="textgame">
              <h1 className="txb">Free to play</h1>
              <p className="txp">
                Industry leading games launcher. A single place from which
                players can play and track rewards across all games.
                <br />
                <br />
                Login with favourite social account {"(google, facebook)"} and a
                gaming wallet is automatically created. Web3 knowledge not
                needed untill when player are ready to transition onto the
                wonders of digital ownership or shared revenue.
              </p>
              <button className="txbb">More</button>
            </div>
            <Image 
            src={contoller} 
            data-aos="fade-right" 
            alt="laptop" 
            className="laptop" />
          </div>
        </div>

        <div
          className="section2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="section2text">
            <Image
              src={nfthouse}
              data-aos="fade-right"
              alt="laptop"
              className="laptop"
            />
            <div
              className="textgame"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1 className="txb">NFT MARKETPLACE</h1>
              <p className="txp">
                Platform to trade digital assets. Our native token $XSEED will
                be the primary token used to power this MARKETPLACE.
                <br />
                <br />
                Players will have the ability to mint, buy, sell and manage
                ecosystem NFTs.
              </p>
              <button className="txbb">More</button>
            </div>
          </div>
        </div>

        <div
          className="section2"
          data-aos="fade-up"
          // data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="section2text">
            <div
              className="textgame"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1 className="txb">Connect Gamers to Business</h1>
              <p className="txp">
                Incentivised adverts integrated into all games powered by Google
                & Facebook AI. Ad revenue will be distributed as follow:
                <br />
                <br />
                60% to players 20% to token holders 20% to make new games
              </p>
              <button className="txbb">More</button>
            </div>
            <Image
              data-aos="fade-right"
              src={homeads}
              alt="laptop"
              className="laptop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import { IndexPageProps } from "../types/sanityData";
// import SecurityBg from "../public/home_banner.gif";
// import { useState, useEffect } from "react";
// import { initOnboard } from "../ulits/onboard";
// import Image from "next/image";
// import { config } from "../dapp.config";
// import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
// import Link from "next/link";
// import train from "../public/22739745_NFT_6 copy.png"
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/router";
// import { Web3Button } from "@thirdweb-dev/react";
// import { ConnectWallet } from "@thirdweb-dev/react";
// const nftContract = config.contractAddress
// import {
//   getTotalMinted,
//   getNumberMinted,
//   getMaxSupply,
//   isPausedState,
//   isPublicSaleState,
//   isWhitelistedSaleState,
//   publicMint,
//   whitelistedMint,
// } from "../ulits/interact";


// const IndexPage: React.FC<IndexPageProps> = ({}) => {
//   const activeChain = ChainId.Mumbai;
//   const [maxSupply, setMaxSupply] = useState(0);
//   const [totalMinted, setTotalMinted] = useState(0);
//   const [NumberMinted, setNumberMinted] = useState(0);
//   const [maxMintAmount, setMaxMintAmount] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [isPublicSale, setIsPublicSale] = useState(false);
//   const [isWlMint, setIsWlMint] = useState(false);

//   const [status, setStatus] = useState(null);
//   const [mintAmount, setMintAmount] = useState(1);
//   const [isMinting, setIsMinting] = useState(false);
//   const [onboard, setOnboard] = useState(null);
//   const [walletAddress, setWalletAddress] = useState("");
//   const router = useRouter();
  
//   useEffect(() => {
//     const init = async () => {
//       setMaxSupply(await getMaxSupply());
//       setTotalMinted(await getTotalMinted());
//       // setNumberMinted(await getNumberMinted());

//       // const isWlMint = await isWhitelistedSaleState();
//       setIsWlMint(isWlMint);

//       setMaxMintAmount(
//         isWlMint ? config.WlMaxMintAmount : config.maxMintAmount
//       );
//     };

//     init();
//   }, []);

//   useEffect(() => {
//     const onboardData = initOnboard({
//       address: (address) => setWalletAddress(address ? address : ""),
//       wallet: (wallet) => {
//         if (wallet.provider) {
//           window.localStorage.setItem("selectedWallet", wallet.name);
//         } else {
//           window.localStorage.removeItem("selectedWallet");
//         }
//       },
//     });
//     setOnboard(onboardData);
//   }, []);

//   const previouslySelectedWallet =
//     typeof window !== "undefined" &&
//     window.localStorage.getItem("selectedWallet");

//   useEffect(() => {
//     if (previouslySelectedWallet !== null && onboard) {
//       onboard.walletSelect(previouslySelectedWallet);
//     }
//   }, [onboard, previouslySelectedWallet]);

//   const connectWalletHandler = async () => {
//     const walletSelected = await onboard.walletSelect();
//     if (walletSelected) {
//       await onboard.walletCheck();
//       window.location.reload(false);
//     }
//   };
//   const incrementMintAmount = () => {
//     if (mintAmount < maxMintAmount) {
//       setMintAmount(mintAmount + 1);
//     }
//   };

//   const decrementMintAmount = () => {
//     if (mintAmount > 1) {
//       setMintAmount(mintAmount - 1);
//     }
//   };

//   const wlMintHandler = async () => {
//     setIsMinting(true);

//     const { success, status } = await whitelistedMint(mintAmount);

//     setStatus({
//       success,
//       message: status,
//     });

//     setIsMinting(false);
//   };
//   const publicMintHandler = async () => {
//     setIsMinting(true);

//     const { success, status } = await publicMint(mintAmount);

//     setStatus({
//       success,
//       message: status,
//     });

//     setIsMinting(false);
//   };
//   return (
//     <ThirdwebProvider activeChain={activeChain}>
//       <div className="homepg "
//        style={{
//             backgroundImage: `url(${SecurityBg.src})`,
//             height: "110vh",
//             backgroundRepeat:"repeat",
            
//           }}
//           >
//         <div className="herobanner">
//         <ToastContainer />
//     <div className="innn">
//     <div className="shape_in">
//       <div className="shape">
//         <div className="shape_inner">
//           <Image className="logo" src={train} alt="logo"/>
//           <ConnectWallet className="connet usdc2"/>
//         </div>
//       </div>
//     </div>
//     <div className="mainhed">
//     <div className="main">
//     <div className="head">
//       <h1 className="headtext">
//      The Brown BG Test
//         </h1>
//         </div>
//       <div>
//       {/* <img src="https://gateway.pinata.cloud/ipfs/QmUKaaRZNLxo5YXctVzvLCViDRdQad1PXdUGUkQdpiq1ou?_gl=1*16lh692*rs_ga*ZmU5YTA5YjEtM2MwZC00MTgwLTk2MDMtY2U4ZTUwYjVjOThl*rs_ga_5RMPXG14TE*MTY4NTkzOTM1Ny40My4xLjE2ODU5Mzk1MDQuNjAuMC4w" alt="side" className="side"/> */}
//       </div>
//     <div className="flex">
//       <div className="animated_image">
//         <div>
//                 <Image
//                   src={train}
//                   alt="hro"
//                   className="previewimg "
//                   // layout="fixed"
          
//                   />
//                   </div>



//                   <p className="pa">
//                 {" "}
//                 Total{" "}
//                 {Number.parseFloat(
//                   paused
//                     ? "0.00"
//                     : config.publicSalePrice * mintAmount
//                 ).toFixed(3)}{" "}
//                 MATIC
//               </p>{" "}
//                   <div className="minmint">
//                     <button
//                       className="bt"
//                       onClick={decrementMintAmount}
//                     >
//                       <svg
//                         xmlns="https://www.w3.org/2000/svg"
//                         className=""
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M18 12H6"
//                         />
//                       </svg>
//                     </button>
//                     <p className="dayo pa">{mintAmount}</p>
//                     <button
//                       className="bt"
//                       onClick={incrementMintAmount}
//                     >
//                       <svg
//                         xmlns="https://www.w3.org/2000/svg"
//                         className=""
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                         />
//                       </svg>
//                     </button>
//                   </div>


//                   <p className="textcol P"><span className="">Minted {totalMinted}</span> /{" "}
//                       {maxSupply}</p>
//                   <div className="buy">
//                   <Web3Button
//                      className="connet2 usdc"
//                        contractAddress={nftContract}
//                        action={(contract) => contract.erc721.claim(mintAmount)}
//                        onSuccess={() => {
//                          toast.success("NFT Minted Successfully, Check wallet!");
//                        }}
//                        onError={(error) => {
//                         console.log(error);
//                         toast.error(`An error occurred while minting NFTs: ${error.reason}`);
//                         // Display the error message on the screen
//                         // return (
//                         //   <div className="error-message">
//                         //     <p>{error.reason}</p>
//                         //   </div>
//                         // );
//                       }}
                       
//                      >
//                        Mint
//                      </Web3Button>
//                   <button className=""></button>
//                   </div>
//                   </div>
                  
//                         </div>
//                         <div className="cc">
//                   <button >
//                <CrossmintPayButton
//                   clientId="bb5b940a-2ab7-413c-86cd-1a6b91b88d74"
//                   projectId="9b6a8cbb-26ab-4a3e-8212-80f13e96cb1d"
//                   mintConfig={{"type":"thirdweb-drop","totalPrice":"0.0000000000001","quantity":"1"}}
//                   environment="staging"
//                   className="P cc_btn"
                
//             />
//                   </button>
//                 </div>

             
//     </div>
//     </div>

//       {/* <img src="https://gateway.pinata.cloud/ipfs/QmUKaaRZNLxo5YXctVzvLCViDRdQad1PXdUGUkQdpiq1ou?_gl=1*16lh692*rs_ga*ZmU5YTA5YjEtM2MwZC00MTgwLTk2MDMtY2U4ZTUwYjVjOThl*rs_ga_5RMPXG14TE*MTY4NTkzOTM1Ny40My4xLjE2ODU5Mzk1MDQuNjAuMC4w" alt="side" className="side2"/> */}
  
//                   </div>
//           {/* <Image src={SecurityBg} className="hero_img" alt="hero" /> */}
//         </div>
       
   

//       </div>
//     </ThirdwebProvider>
//   );
// };

// export default IndexPage;
