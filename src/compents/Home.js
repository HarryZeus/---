import React from 'react';
import sea from '../sea.jpg';
import tools from '../tools.png';

function Home() {
      return (
        <div>
          <div>
            <h1></h1>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className='intro intro1'>
            <h2>使用到的技术</h2>
            <p className='intro-text'>&emsp;&emsp;React + Ganache + truffle + Metamask
            &emsp;&emsp;React是一个用来构建用户接口的JavaScript库，最早由Facebook开发，它的特性如下：(1)声明式
            (2)组件化(3)复用性强;
          
            Truffle是以太坊的一种开发环境、测试框架以及资产管道，大大简化了以太坊合约编译部署的过程;
        
            Ganache 是一个以太坊模拟器，可以更快、更简单、更安全地开发以太坊应用程序。它包含所有通用的RPC（Remote Procedure Call）函数和特征，可以确定地运行简化开发过程;
       
             MetaMask是用于与以太坊区块链进行交互的软件加密货币钱包。它允许用户通过浏览器扩展程序或移动应用程序访问其以太坊钱包，然后可以使用这些扩展程序与去中心化应用程序进行交互。
            </p>
            <img src={tools} className='pic seaPic'></img>
          </div>
          <div className='intro intro2'>
            <h2>数据发布</h2>
            <p className='intro-text'>
            &emsp; &emsp;ipfs + ethereum 链上链下混合的数据发布方式。
              链下：星际文件系统（InterPlanetary File System，缩写为IPFS）是一个旨在实现文件的分布式存储、共享和持久化的网络传输协议。使用IPFS完成存储上传的加密文件。
              链上：使用web3.js与区块链交互，将ipfs返回的内容标识符CID存储到链上。
              ipfs与ethereum都有去中心化的特征，不依赖于某个第三方的存在，可以很好的避免单点故障的出现，而且数据不受某一组织的控制。
            </p>
            <img src={sea} className='pic seaPic'></img>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className='intro intro3'>
            <img src={sea} className='pic seaPic'></img>
            <h2>数据交易</h2>
            <p className='intro-text'>&emsp;&emsp;交易的逻辑由部署在区块链上的智能合约定义，
            数据购买者可从数据板中了解到最新的交易信息，并购买合适的数据。交易的内部过程有平台程序与以太坊区块链、ipfs交互完成，对用户是不可见的。
            数据的交易过程中，数据加解密的过程在程序中自动进行，提供给用户更简单、更安全的体验。
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        </div>
      )
}
  
  
  export default Home;