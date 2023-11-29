import React from 'react'
import SecurityBg from "../public/home_banner.png";
import Image from "next/image";
import laptop from "../public/home_games.png"
import shape from "../public/home_blockchain.png"
import contoller from "../public/home_controller.png"
import nfthouse from "../public/home_marketplace.png"
import homeads from "../public/home_ads.png"


const home = () => {
  return (
    <div className='homepg'>
    <div
    // className="secuiry_bg"
    // style={{
    //   backgroundImage: `url(${SecurityBg.src})`,
    //   height: "110vh",
    // }}
    >
      <Image src={SecurityBg} alt='hero'/>
      <div className='sectionhero'>
      {/*banner + btn */}
   <div className="textbtn">

   <div className="textbtn2">


    <div className="textin">
    <button className="btntext">FULL GAMES</button>
    <button className="btntext">LAYER GAME </button>
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


<div className='section2 topp'>
    <div className='section2text'>
      <div className='textgame'>
        <h1 className='txb'>32 mobile & pc games</h1>
        <p className='txp'>Large libraary of studio games inspired by the very best games
          of all time such as COD, Fall Guys, Space Invaders, Dynasty Warriors & Diablo.
          We will generate revenue from adverts and share that with players.

        <br/>
        <br/>
        Our players can just focus on having fun and not need to know anything about blockchain
        technologhy unless they want to. 
        </p>
        <button className='txbb'>More</button>
      </div>
      <Image src={laptop} alt='laptop' className='laptop'/>
    </div>
  </div>

<div className='section2'>
    <div className='section2text'>
      <Image src={shape} alt='laptop' className='laptop'/>
      <div className='textgame'>
        <h1 className='txb'>32 mobile & pc games</h1>
        <p className='txp'>Large libraary of studio games inspired by the very best games
          of all time such as COD, Fall Guys, Space Invaders, Dynasty Warriors & Diablo.
          We will generate revenue from adverts and share that with players.

        <br/>
        <br/>
        Our players can just focus on having fun and not need to know anything about blockchain
        technologhy unless they want to. 
        </p>
        <button className='txbb'>More</button>
      </div>
    </div>
  </div>

<div className='section2'>
    <div className='section2text'>
      <div className='textgame'>
        <h1 className='txb'>32 mobile & pc games</h1>
        <p className='txp'>Large libraary of studio games inspired by the very best games
          of all time such as COD, Fall Guys, Space Invaders, Dynasty Warriors & Diablo.
          We will generate revenue from adverts and share that with players.

        <br/>
        <br/>
        Our players can just focus on having fun and not need to know anything about blockchain
        technologhy unless they want to. 
        </p>
        <button className='txbb'>More</button>
      </div>
      <Image src={contoller} alt='laptop' className='laptop'/>
    </div>
  </div>

<div className='section2'>
    <div className='section2text'>
      <Image src={nfthouse} alt='laptop' className='laptop'/>
      <div className='textgame'>
        <h1 className='txb'>32 mobile & pc games</h1>
        <p className='txp'>Large libraary of studio games inspired by the very best games
          of all time such as COD, Fall Guys, Space Invaders, Dynasty Warriors & Diablo.
          We will generate revenue from adverts and share that with players.

        <br/>
        <br/>
        Our players can just focus on having fun and not need to know anything about blockchain
        technologhy unless they want to. 
        </p>
        <button className='txbb'>More</button>
      </div>
    </div>
  </div>

<div className='section2'>
    <div className='section2text'>
      <div className='textgame'>
        <h1 className='txb'>32 mobile & pc games</h1>
        <p className='txp'>Large libraary of studio games inspired by the very best games
          of all time such as COD, Fall Guys, Space Invaders, Dynasty Warriors & Diablo.
          We will generate revenue from adverts and share that with players.

        <br/>
        <br/>
        Our players can just focus on having fun and not need to know anything about blockchain
        technologhy unless they want to. 
        </p>
        <button className='txbb'>More</button>
      </div>
      <Image src={homeads} alt='laptop' className='laptop'/>
    </div>
  </div>
  </div>
  )
}

export default home