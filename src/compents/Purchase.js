import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';

const web3 = new Web3(
  "ws://127.0.0.1:7545"
);
  const abi = [
    {
      "inputs": [],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "desc",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "kind",
          "type": "string"
        }
      ],
      "name": "Describe",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "changeOwner",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "desc",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDescValues",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getHashValues",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isBuy",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "kind",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "price",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_hashValue",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_pk",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_desc",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_kind",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_iv",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_encodeSymm",
          "type": "string"
        }
      ],
      "name": "setValues",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

function Purchase(props) {
      // 这里的 purchaseId 即为对应 item 的合约地址
      //const [hash, setHash] = useState('');
      //const [isBuy, setBuy] = useState(false);

      function handleConfirm() {

        if(props.acc === ''){
          alert("请先登录！！！");
        }
        var contract = new web3.eth.Contract(abi, props.purchaseId); 
        contract.methods.changeOwner().send({
          from: props.acc,
          gas: 3000000,
          value: props.itemPrice * (10 ** 18)
        })
        .then(function(receipt){
          console.log(receipt.blockNumber);
          alert('购买成功！！！');
          (props.myMap).set(props.acc, true);
        })
        
      }

      function handleCid() {
        //alert((props.myMap).get(props.acc));
        if((props.myMap).get(props.acc) === true){
          var contract = new web3.eth.Contract(abi, props.purchaseId);
        contract.methods.getHashValues().call({
          from: props.acc,
          gas: 3000000
        })
        .then(function(result){
          console.log(result);
          props.setPk(result[1]);
          props.setSymm(result[3]);
          props.setIv(result[2]);
          alert(result[0]);
        })
        }
        else{
          alert('需要先购买！！！');
        }
        
      }

      return ( 
        <div className='border-form'>
         <h1>purchase confirmation</h1>
         <div className='confirm'>
           <p>确定向合约地址为: <b><i>{props.purchaseId}</i></b> 发起交易吗?</p>
           <p>价格为: <b><i>{props.itemPrice} Ether</i></b></p>
           <p>注意：请确保你有足够的余额</p>
           <button className='button trade' onClick={handleConfirm}>确定</button>
           <button className='button trade'><Link to='/status' className='link-cancel'>取消</Link></button>
           <br></br>
           <button onClick={handleCid}>查看cid的值</button>
         </div> 
       </div>
      )
}
  
  
export default Purchase;