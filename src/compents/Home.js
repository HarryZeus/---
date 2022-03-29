import React from 'react';
import sea from '../sea.jpg';
import tools from '../tools.png';

function Home() {
      return (
        <div>
          <div>
            <h1>Want to know how it is works?</h1>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className='intro intro1'>
            <h2>数据发布</h2>
            <p>ipfs + ethereum</p>
            <img src={sea} className='pic seaPic'></img>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className='intro intro2'>
            <img src={sea} className='pic seaPic'></img>
            <h2>数据发布</h2>
            <p>smart contract</p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='intro intro3'>
            <h2>使用到的技术</h2>
            <p>.......</p>
            <img src={tools} className='pic seaPic'></img>
          </div>
        </div>
      )
}
  
  
  export default Home;