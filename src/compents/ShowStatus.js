import React, { useState, useEffect } from 'react';
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
        "name": "_sk",
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
      }
    ],
    "name": "setValues",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const abiArray = [
	{
		"inputs": [],
		"name": "array",
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
		"name": "getArray",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "_array",
				"type": "string"
			}
		],
		"name": "setArray",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

function Status(props){

      //const [itemInfo, setItem] = useState([]);
      //const [array, setArray] = useState(props.array);
      const [array, setArray] = useState('');

      //const [obj, setObj] = useState(Object);

      function handleClick(){
        props.deleteTask(props.id);
      }  

      function handlePruchaseId() {
        props.setPurId(props.address);
        props.setItemPrice(props.price);
      }

      function handleRefresh(){

        
        var arrayContract = new web3.eth.Contract(abiArray, props.arrayContractAddress);
        arrayContract.methods.getArray().call({
          from: props.acc,
          gas: 3000000
        })
        .then(function(receipt){
          var tmp = receipt.split(',');
          tmp.shift();
          setArray(tmp);
        }) 
        console.log(array);
        if(array != ''){
          alert('刷新成功');
        }
    
        // 调用getPastLogs
        for(var i in array){
        var Contract = new web3.eth.Contract(abi, array[i]);
        Contract.methods.getDescValues().call({
          from: props.acc,
          gas: 3000000
        })
        .then(function(receipt){
          //setObj(receipt);
          if(receipt[0] != ''){
            props.addArray(receipt[0], receipt[1]);
            console.log(receipt);
          }
        }) 
        console.log(props.Array);
        web3.eth.getPastLogs({
          address: array[i],
          fromBlock: 0,
          toBlock: "latest",
          topics: ["0xcddf21f595b6624c5fe9479fc47da814e35dc3be8c4650f7d4169236566f1807"]
        })
        .then(response => {
          //props.addTask(response[0].address, obj[1], obj[0], web3.utils.hexToNumber(response[0].topics[2]));
          props.addTemp(response[0].address, web3.utils.hexToNumber(response[0].topics[2]));
        });
      }

      //var len = array.length;
     /*  for(var j=0, len = array.length, k = props.Array.length; j < len; j++){
        props.addTask(props.Temp[j+1][0], props.Array[1 + j][1], props.Array[j+1][0],props.Temp[j+1][1]);
      } */

      for(var j=0, len = array.length, k = props.Array.length , l = props.Temp.length; (k - len + j) < k && (l - len + j) < l; j++){
        props.addTask(props.Temp[l - len + j][0], props.Array[k - len + j][1], props.Array[k - len + j][0],props.Temp[l - len + j][1]);
      }
      
      console.log()
      
      }
      const template1 = (
        <div>
        <section className='flex-container'>
        <br></br>
        <button className='refresh-btn' onClick={handleRefresh}>刷新</button>
        <article>
          <button className='delete-btn' onClick={handleClick}>X</button>
          <h3>{props.id}</h3>
          <h4>合约地址：{props.address}</h4>
          <p className='card-desc'>描述：{props.describe}</p>
          <p>价格：{props.price}</p>
          <p>类型：{props.opValue}</p>
          <button className='button flex-btn' onClick={handlePruchaseId}><Link to='purchase'>购买</Link></button>
        </article>
        <br></br>
        </section>  
        </div>
      )

      const template2 = (
        <div>
        <section className='flex-container'>
        <br></br>
        <article>
          <button className='delete-btn' onClick={handleClick}>X</button>
          <h3>{props.id}</h3>
          <h4>合约地址：{props.address}</h4>
          <p className='card-desc'>描述：{props.describe}</p>
          <p>价格：{props.price}</p>
          <p>类型：{props.opValue}</p>
          <button className='button flex-btn' onClick={handlePruchaseId}><Link to='purchase'>购买</Link></button>
        </article>
        <br></br>
        </section>  
        </div>
      )
      return (
        <div>
          {props.index ? template2 : template1}
        </div>
        
      )    
}
  
export default Status;