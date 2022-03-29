import React, { useState } from 'react';
import { create } from 'ipfs-http-client';
import Web3 from 'web3';

const web3 = new Web3(
  "ws://127.0.0.1:7545"
);

const code = '60806040526000600660006101000a81548160ff02191690831515021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610fa08061006f6000396000f3fe60806040526004361061007b5760003560e01c80635fd4a0181161004e5780635fd4a0181461012a57806362a0947714610156578063842e4cf014610160578063a035b1fe1461018c5761007b565b806304baa00b146100805780634fb90848146100ab5780634ffe87de146100d657806355f150f1146100ff575b600080fd5b34801561008c57600080fd5b506100956101b7565b6040516100a291906109ed565b60405180910390f35b3480156100b757600080fd5b506100c0610245565b6040516100cd9190610a2a565b60405180910390f35b3480156100e257600080fd5b506100fd60048036038101906100f89190610bc4565b610258565b005b34801561010b57600080fd5b506101146103be565b60405161012191906109ed565b60405180910390f35b34801561013657600080fd5b5061013f61044c565b60405161014d929190610caf565b60405180910390f35b61015e6105e4565b005b34801561016c57600080fd5b50610175610784565b604051610183929190610caf565b60405180910390f35b34801561019857600080fd5b506101a16108ab565b6040516101ae9190610cf5565b60405180910390f35b600480546101c490610d3f565b80601f01602080910402602001604051908101604052809291908181526020018280546101f090610d3f565b801561023d5780601f106102125761010080835404028352916020019161023d565b820191906000526020600020905b81548152906001019060200180831161022057829003601f168201915b505050505081565b600660009054906101000a900460ff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102df90610dbc565b60405180910390fd5b84600090805190602001906102fe9291906108b1565b50670de0b6b3a7640000836103139190610e0b565b600581905550836001908051906020019061032f9291906108b1565b5081600390805190602001906103469291906108b1565b50806004908051906020019061035d9291906108b1565b508060405161036c9190610ea1565b604051809103902083836040516103839190610ea1565b60405180910390207fcddf21f595b6624c5fe9479fc47da814e35dc3be8c4650f7d4169236566f180760405160405180910390a45050505050565b600380546103cb90610d3f565b80601f01602080910402602001604051908101604052809291908181526020018280546103f790610d3f565b80156104445780601f1061041957610100808354040283529160200191610444565b820191906000526020600020905b81548152906001019060200180831161042757829003601f168201915b505050505081565b60608060011515600660009054906101000a900460ff161515146104a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049c90610f04565b60405180910390fd5b6000600660006101000a81548160ff021916908315150217905550600060018180546104d090610d3f565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc90610d3f565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b5050505050915080805461055c90610d3f565b80601f016020809104026020016040519081016040528092919081815260200182805461058890610d3f565b80156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b50505050509050915091509091565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415801561065a57506005543373ffffffffffffffffffffffffffffffffffffffff1631115b61066357600080fd5b3073ffffffffffffffffffffffffffffffffffffffff163460405161068790610f55565b60006040518083038185875af1925050503d80600081146106c4576040519150601f19603f3d011682016040523d82523d6000602084013e6106c9565b606091505b5050506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660055460405161071690610f55565b60006040518083038185875af1925050503d8060008114610753576040519150601f19603f3d011682016040523d82523d6000602084013e610758565b606091505b505090508061076657600080fd5b6001600660006101000a81548160ff02191690831515021790555050565b6060806003600481805461079790610d3f565b80601f01602080910402602001604051908101604052809291908181526020018280546107c390610d3f565b80156108105780601f106107e557610100808354040283529160200191610810565b820191906000526020600020905b8154815290600101906020018083116107f357829003601f168201915b5050505050915080805461082390610d3f565b80601f016020809104026020016040519081016040528092919081815260200182805461084f90610d3f565b801561089c5780601f106108715761010080835404028352916020019161089c565b820191906000526020600020905b81548152906001019060200180831161087f57829003601f168201915b50505050509050915091509091565b60055481565b8280546108bd90610d3f565b90600052602060002090601f0160209004810192826108df5760008555610926565b82601f106108f857805160ff1916838001178555610926565b82800160010185558215610926579182015b8281111561092557825182559160200191906001019061090a565b5b5090506109339190610937565b5090565b5b80821115610950576000816000905550600101610938565b5090565b600081519050919050565b600082825260208201905092915050565b60005b8381101561098e578082015181840152602081019050610973565b8381111561099d576000848401525b50505050565b6000601f19601f8301169050919050565b60006109bf82610954565b6109c9818561095f565b93506109d9818560208601610970565b6109e2816109a3565b840191505092915050565b60006020820190508181036000830152610a0781846109b4565b905092915050565b60008115159050919050565b610a2481610a0f565b82525050565b6000602082019050610a3f6000830184610a1b565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a9b826109a3565b810181811067ffffffffffffffff82111715610aba57610ab9610a63565b5b80604052505050565b6000610acd610a45565b9050610ad98282610a92565b919050565b600067ffffffffffffffff821115610af957610af8610a63565b5b610b02826109a3565b9050602081019050919050565b82818337600083830152505050565b6000610b31610b2c84610ade565b610ac3565b905082815260208101848484011115610b4d57610b4c610a5e565b5b610b58848285610b0f565b509392505050565b600082601f830112610b7557610b74610a59565b5b8135610b85848260208601610b1e565b91505092915050565b6000819050919050565b610ba181610b8e565b8114610bac57600080fd5b50565b600081359050610bbe81610b98565b92915050565b600080600080600060a08688031215610be057610bdf610a4f565b5b600086013567ffffffffffffffff811115610bfe57610bfd610a54565b5b610c0a88828901610b60565b955050602086013567ffffffffffffffff811115610c2b57610c2a610a54565b5b610c3788828901610b60565b9450506040610c4888828901610baf565b935050606086013567ffffffffffffffff811115610c6957610c68610a54565b5b610c7588828901610b60565b925050608086013567ffffffffffffffff811115610c9657610c95610a54565b5b610ca288828901610b60565b9150509295509295909350565b60006040820190508181036000830152610cc981856109b4565b90508181036020830152610cdd81846109b4565b90509392505050565b610cef81610b8e565b82525050565b6000602082019050610d0a6000830184610ce6565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d5757607f821691505b602082108103610d6a57610d69610d10565b5b50919050565b7f43616c6c6572206973206e6f74206f776e657200000000000000000000000000600082015250565b6000610da660138361095f565b9150610db182610d70565b602082019050919050565b60006020820190508181036000830152610dd581610d99565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e1682610b8e565b9150610e2183610b8e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e5a57610e59610ddc565b5b828202905092915050565b600081905092915050565b6000610e7b82610954565b610e858185610e65565b9350610e95818560208601610970565b80840191505092915050565b6000610ead8284610e70565b915081905092915050565b7f596f75206e65656420746f2070617920666f7220697400000000000000000000600082015250565b6000610eee60168361095f565b9150610ef982610eb8565b602082019050919050565b60006020820190508181036000830152610f1d81610ee1565b9050919050565b600081905092915050565b50565b6000610f3f600083610f24565b9150610f4a82610f2f565b600082019050919050565b6000610f6082610f32565b915081905091905056fea2646970667358221220019abc91e03ed4d2f89bfbea9686c474a7ae193379aad3f9fd3e9b5708f548dc64736f6c634300080d0033';
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

const ipfs = create('http://127.0.0.1:5001');

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

function Upload(props) {

/*   const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [opValue, setOpValue] = useState('');
  const [hash, setHash] = useState('');

  const [result, setResult] = useState(''); */
  
  //存储array合约的地址
  function createContract() {
    let address =  new Promise(resolve => {
      web3.eth.sendTransaction({
      from: props.acc,
      gas: 3000000,
      data: code
      })
      .then(function(receipt){
        return  resolve(receipt.contractAddress);
      })
    })
    return address;
  }

  async function uploadFile(buff) {
    let cid = await ipfs.add(buff);
    props.setHash(cid.cid);
    //alert(cid.cid);
  }
  
  function handleChange(e) {
    const fileData = e.target.files[0];
    if(fileData){
        uploadFile(fileData);
    }
  }
  function handleClick() {
    const filedom = document.getElementById('file');
    filedom.click()
  }


  function handleOpValue(e){
    props.setOpValue(e.target.value);
  }
  function handleString(e) {
    props.setDesc(e.target.value);
  }
  function handlePrice(e) {
    props.setPrice(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    //props.addTask(props.opValue, props.desc, props.price);  

    createContract()
    .then( result => {
      props.setResult(result);
    })
    //alert((props.hash).toString());
    //alert(props.opValue);
    var contract = new web3.eth.Contract(abi, props.result);
    contract.methods.setValues((props.hash).toString(), 'sk', props.price, (props.desc).toString(), (props.opValue).toString()).send({
      from: props.acc,
      gas: 3000000
    })
    .then(function(receipt){
      console.log(receipt.blockNumber);
    }) 

    
    var arrayContract = new web3.eth.Contract(abiArray, props.arrayContractAddress);
    arrayContract.methods.setArray((props.result).toString()).send({
      from: props.acc,
      gas: 3000000
    })
    .then(function(receipt){
      console.log(receipt.blockNumber);
    }) 

    //props.addArray(props.result);
    alert('上传成功');
    //console.log(props.array);
    /* setPrice();
    setOpValue();
    setDesc(""); */
    // onChange={handleOpValue}
  }


  
  return(
    <div>
      <h2>请完成以下表单</h2>
      <form className='' onSubmit={handleSubmit} > 
      <div>
        <label>
          类型:
        </label>
        <input type="text" className='input' onChange={handleOpValue}></input>
      </div>
      <div>
        <label>
          用途:
        </label>
        <input type="text" className='input' onChange={handleString}></input>
      </div>
      <div>
        <label>
          定价:
        </label>
        <input type="number" className='input' placeholder='单位: Ether' onChange={handlePrice}></input>
      </div>

      <button type="submit" className="button inputvalues">
        confirm
      </button>
      </form>


      <div> 
        <input id="file" type="file" 
         	style={{ display:"none", }}
         	onChange={handleChange}
        />
        <button className='button chosefiles' onClick={handleClick}>选择文件并上传</button>
      </div>   
    </div>
  )
}

export default Upload;

/* class Upload extends Component() {

  // 触发选择文件模拟点击事件
  getFilds = () =>{
    const filedom = document.getElementById('file');
    filedom.click()
  }
  // 用于监听按钮上传的事件
  fileinputChange = (event) =>{
    const fileData = event.target.files[0];
    if(fileData){
        this.setState({newFile: fileData});
        alert("yes!");
    }
    // 获取到的文件 fileData
    // if(fileData){
    //   this.setState({ fileData, })
    //   const formdata = new FormData();
    //   formdata.append("wordType",3);
    //   formdata.append("file",fileData);
    //   this.send(formdata)
    // }
  }
  // 文件上传
  // send =  async (formdata) =>{
  //   // const url = "url";
  //   fetch(url, {
  //     method:'post',
  //     headers:{
  //       "X-token":token,
  //     },
  //     body:formdata,
  //   }).then(res=>res.json()).then(res=>{
  //     // 处理返回值
  //     console.log(`res`, res)
  //     // if(res.code===1000){
  //     //   Notify.success(res.desc)
  //     // } else Notify.error(res.desc)
  //   })
  // }
  render(){
    return (
      <div>
        <input id="file" type="file" 
         	style={{ display:"none", }}
         	onChange={this.fileinputChange}
        />
        <button onClick={this.getFilds}>选择文件并上传</button>
      </div>
    )
  }
    
} */