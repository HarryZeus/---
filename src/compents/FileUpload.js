import React, { useState } from 'react';
import crypto from 'crypto';
import logo from '../logo.png';
import { create } from 'ipfs-http-client';
import Web3 from 'web3';

const web3 = new Web3(
  "ws://127.0.0.1:7545"
);

const code = '60806040526000600860006101000a81548160ff02191690831515021790555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506111b88061006f6000396000f3fe60806040526004361061007b5760003560e01c806362a094771161004e57806362a094771461012f578063842e4cf014610139578063a035b1fe14610165578063b6b4c35f146101905761007b565b806304baa00b146100805780634fb90848146100ab57806355f150f1146100d65780635fd4a01814610101575b600080fd5b34801561008c57600080fd5b506100956101b9565b6040516100a29190610b44565b60405180910390f35b3480156100b757600080fd5b506100c0610247565b6040516100cd9190610b81565b60405180910390f35b3480156100e257600080fd5b506100eb61025a565b6040516100f89190610b44565b60405180910390f35b34801561010d57600080fd5b506101166102e8565b6040516101269493929190610b9c565b60405180910390f35b6101376105a5565b005b34801561014557600080fd5b5061014e610745565b60405161015c929190610bfd565b60405180910390f35b34801561017157600080fd5b5061017a61086c565b6040516101879190610c4d565b60405180910390f35b34801561019c57600080fd5b506101b760048036038101906101b29190610ddd565b610872565b005b600680546101c690610f56565b80601f01602080910402602001604051908101604052809291908181526020018280546101f290610f56565b801561023f5780601f106102145761010080835404028352916020019161023f565b820191906000526020600020905b81548152906001019060200180831161022257829003601f168201915b505050505081565b600860009054906101000a900460ff1681565b6005805461026790610f56565b80601f016020809104026020016040519081016040528092919081815260200182805461029390610f56565b80156102e05780601f106102b5576101008083540402835291602001916102e0565b820191906000526020600020905b8154815290600101906020018083116102c357829003601f168201915b505050505081565b60608060608060011515600860009054906101000a900460ff16151514610344576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033b90610fd4565b60405180910390fd5b6000600860006101000a81548160ff021916908315150217905550600060016003600283805461037390610f56565b80601f016020809104026020016040519081016040528092919081815260200182805461039f90610f56565b80156103ec5780601f106103c1576101008083540402835291602001916103ec565b820191906000526020600020905b8154815290600101906020018083116103cf57829003601f168201915b505050505093508280546103ff90610f56565b80601f016020809104026020016040519081016040528092919081815260200182805461042b90610f56565b80156104785780601f1061044d57610100808354040283529160200191610478565b820191906000526020600020905b81548152906001019060200180831161045b57829003601f168201915b5050505050925081805461048b90610f56565b80601f01602080910402602001604051908101604052809291908181526020018280546104b790610f56565b80156105045780601f106104d957610100808354040283529160200191610504565b820191906000526020600020905b8154815290600101906020018083116104e757829003601f168201915b5050505050915080805461051790610f56565b80601f016020809104026020016040519081016040528092919081815260200182805461054390610f56565b80156105905780601f1061056557610100808354040283529160200191610590565b820191906000526020600020905b81548152906001019060200180831161057357829003601f168201915b50505050509050935093509350935090919293565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415801561061b57506007543373ffffffffffffffffffffffffffffffffffffffff1631115b61062457600080fd5b3073ffffffffffffffffffffffffffffffffffffffff163460405161064890611025565b60006040518083038185875af1925050503d8060008114610685576040519150601f19603f3d011682016040523d82523d6000602084013e61068a565b606091505b5050506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166007546040516106d790611025565b60006040518083038185875af1925050503d8060008114610714576040519150601f19603f3d011682016040523d82523d6000602084013e610719565b606091505b505090508061072757600080fd5b6001600860006101000a81548160ff02191690831515021790555050565b6060806005600681805461075890610f56565b80601f016020809104026020016040519081016040528092919081815260200182805461078490610f56565b80156107d15780601f106107a6576101008083540402835291602001916107d1565b820191906000526020600020905b8154815290600101906020018083116107b457829003601f168201915b505050505091508080546107e490610f56565b80601f016020809104026020016040519081016040528092919081815260200182805461081090610f56565b801561085d5780601f106108325761010080835404028352916020019161085d565b820191906000526020600020905b81548152906001019060200180831161084057829003601f168201915b50505050509050915091509091565b60075481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610902576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f990611086565b60405180910390fd5b8660009080519060200190610918929190610a08565b50670de0b6b3a76400008561092d91906110d5565b6007819055508560019080519060200190610949929190610a08565b508160039080519060200190610960929190610a08565b508060029080519060200190610977929190610a08565b50836005908051906020019061098e929190610a08565b5082600690805190602001906109a5929190610a08565b50826040516109b4919061116b565b604051809103902085856040516109cb919061116b565b60405180910390207fcddf21f595b6624c5fe9479fc47da814e35dc3be8c4650f7d4169236566f180760405160405180910390a450505050505050565b828054610a1490610f56565b90600052602060002090601f016020900481019282610a365760008555610a7d565b82601f10610a4f57805160ff1916838001178555610a7d565b82800160010185558215610a7d579182015b82811115610a7c578251825591602001919060010190610a61565b5b509050610a8a9190610a8e565b5090565b5b80821115610aa7576000816000905550600101610a8f565b5090565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ae5578082015181840152602081019050610aca565b83811115610af4576000848401525b50505050565b6000601f19601f8301169050919050565b6000610b1682610aab565b610b208185610ab6565b9350610b30818560208601610ac7565b610b3981610afa565b840191505092915050565b60006020820190508181036000830152610b5e8184610b0b565b905092915050565b60008115159050919050565b610b7b81610b66565b82525050565b6000602082019050610b966000830184610b72565b92915050565b60006080820190508181036000830152610bb68187610b0b565b90508181036020830152610bca8186610b0b565b90508181036040830152610bde8185610b0b565b90508181036060830152610bf28184610b0b565b905095945050505050565b60006040820190508181036000830152610c178185610b0b565b90508181036020830152610c2b8184610b0b565b90509392505050565b6000819050919050565b610c4781610c34565b82525050565b6000602082019050610c626000830184610c3e565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610cbe82610afa565b810181811067ffffffffffffffff82111715610cdd57610cdc610c86565b5b80604052505050565b6000610cf0610c68565b9050610cfc8282610cb5565b919050565b600067ffffffffffffffff821115610d1c57610d1b610c86565b5b610d2582610afa565b9050602081019050919050565b82818337600083830152505050565b6000610d54610d4f84610d01565b610ce6565b905082815260208101848484011115610d7057610d6f610c81565b5b610d7b848285610d32565b509392505050565b600082601f830112610d9857610d97610c7c565b5b8135610da8848260208601610d41565b91505092915050565b610dba81610c34565b8114610dc557600080fd5b50565b600081359050610dd781610db1565b92915050565b600080600080600080600060e0888a031215610dfc57610dfb610c72565b5b600088013567ffffffffffffffff811115610e1a57610e19610c77565b5b610e268a828b01610d83565b975050602088013567ffffffffffffffff811115610e4757610e46610c77565b5b610e538a828b01610d83565b9650506040610e648a828b01610dc8565b955050606088013567ffffffffffffffff811115610e8557610e84610c77565b5b610e918a828b01610d83565b945050608088013567ffffffffffffffff811115610eb257610eb1610c77565b5b610ebe8a828b01610d83565b93505060a088013567ffffffffffffffff811115610edf57610ede610c77565b5b610eeb8a828b01610d83565b92505060c088013567ffffffffffffffff811115610f0c57610f0b610c77565b5b610f188a828b01610d83565b91505092959891949750929550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f6e57607f821691505b60208210811415610f8257610f81610f27565b5b50919050565b7f596f75206e65656420746f2070617920666f7220697400000000000000000000600082015250565b6000610fbe601683610ab6565b9150610fc982610f88565b602082019050919050565b60006020820190508181036000830152610fed81610fb1565b9050919050565b600081905092915050565b50565b600061100f600083610ff4565b915061101a82610fff565b600082019050919050565b600061103082611002565b9150819050919050565b7f43616c6c6572206973206e6f74206f776e657200000000000000000000000000600082015250565b6000611070601383610ab6565b915061107b8261103a565b602082019050919050565b6000602082019050818103600083015261109f81611063565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110e082610c34565b91506110eb83610c34565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611124576111236110a6565b5b828202905092915050565b600081905092915050565b600061114582610aab565b61114f818561112f565b935061115f818560208601610ac7565b80840191505092915050565b6000611177828461113a565b91508190509291505056fea26469706673582212202ff912fc48fe389993a658277c23c771b333cd1c146153d22232a3705af6e5ec64736f6c634300080a0033';
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
  
  const [pub_key, setPub] = useState();
  const [priv_key, setPriv] = useState('');
  const [symm_key, setSymm] = useState();
  const [iv, setIv] = useState('');
  const [enc_SymmeKey, setEnc] = useState('');

  /*
    Convert  an ArrayBuffer into a string
    from https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
  */
  function ab2str(buf) {
    var bufView = new Uint16Array(buf);
    var length = bufView.length;
    var result = '';
    var addition = Math.pow(2,16)-1;

    for(var i = 0;i<length;i+=addition){

        if(i + addition > length){
            addition = length - i;
        }
        result += String.fromCharCode.apply(null, bufView.subarray(i,i+addition));
    }

    return result; 
    //return String.fromCharCode.apply(null, new Uint16Array(buf));
  }

  function str2ab(str) {
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
    }
    return buf;
  } 
  /**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info
*
**/
  var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

    // public method for encoding
    , encode: function (input)
    {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length)
        {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2))
            {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3))
            {
                enc4 = 64;
            }

            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        } // Whend 

        return output;
    } // End Function encode 


    // public method for decoding
    ,decode: function (input)
    {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length)
        {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64)
            {
                output = output + String.fromCharCode(chr2);
            }

            if (enc4 != 64)
            {
                output = output + String.fromCharCode(chr3);
            }

        } // Whend 

        output = Base64._utf8_decode(output);

        return output;
    } // End Function decode 


    // private method for UTF-8 encoding
    ,_utf8_encode: function (string)
    {
        var utftext = "";
        string = string.replace(/\r\n/g, "\n");

        for (var n = 0; n < string.length; n++)
        {
            var c = string.charCodeAt(n);

            if (c < 128)
            {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048))
            {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else
            {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        } // Next n 

        return utftext;
    } // End Function _utf8_encode 

    // private method for UTF-8 decoding
    ,_utf8_decode: function (utftext)
    {
        var string = "";
        var i = 0;
        var c, c1, c2, c3;
        c = c1 = c2 = 0;

        while (i < utftext.length)
        {
            c = utftext.charCodeAt(i);

            if (c < 128)
            {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224))
            {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else
            {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        } // Whend 

        return string;
    } // End Function _utf8_decode 

  }

  async function exportCryptoKey(key) {
    const exported = await window.crypto.subtle.exportKey(
      "pkcs8",
      key
    );
    const exportedAsString = ab2str(exported);
    const exportedAsBase64 = Base64.encode(exportedAsString);
    const pemExported = `-----BEGIN PIRVATE KEY-----\n${exportedAsBase64}\n-----END PIRVATE KEY-----`;
    
    //console.log(pemExported);

    setPriv(pemExported);
  }

  function createPairKeys(){ //??????rsa?????????
    
    // Web API
    window.crypto.subtle.generateKey(
      {
      name: "RSA-OAEP",
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
      },
      true,
      ["encrypt", "decrypt"]
    ).then((keyPair) => {

        exportCryptoKey(keyPair.privateKey);
        setPub(keyPair.publicKey);
    });
    console.log('?????????generatePairKey')
  }

  async function uploadFile(buff) {

    const cipher = await symmetryEncode(buff);
    //console.log(symm_key)
    
    /* let enc_SymmeKey = await window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP"
      },
      pub_key,
      symm_key
    );
    
     let a = ab2str(enc_SymmeKey); // ArrayBuffer ????????? ?????????
    const aAsBase64 = Base64.encode(a);
    //console.log(aAsBase64);
    setEnc(aAsBase64); */

    let cid = await ipfs.add(cipher);
    props.setHash(cid.cid); 
    //alert(cid.cid);
  }

  async function symmetryEncode(file) { // web API ??????

    let iv = window.crypto.getRandomValues(new Uint8Array(16));
    console.log(iv);
    let key = window.crypto.getRandomValues(new Uint8Array(32));
    console.log(key);

    //let a = Base64.encode(ab2str(key.buffer))
    //setEnc(a);
    let enc_SymmeKey = await window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP"
      },
      pub_key,
      key.buffer
    );
    
    let a = ab2str(enc_SymmeKey); // ArrayBuffer ????????? ?????????
    const aAsBase64 = Base64.encode(a);
    //console.log(aAsBase64);
    setEnc(aAsBase64);
    
    //crypto functions are wrapped in promises so we have to use await and make sure the function that
    //contains this code is an async function
    //encrypt function wants a cryptokey object
    const key_encoded = await window.crypto.subtle.importKey( "raw", key.buffer, 'AES-CTR' ,  true,   ["decrypt","encrypt"]);
    const crypted = await window.crypto.subtle.encrypt(
      {
        name: "AES-CTR",
        counter: iv,
        length: 64 
      },
      key_encoded,
      file
    );
    
    setIv(Base64.encode(ab2str(iv.buffer)));
    //setSymm(key);
    return crypted;
  }
  
  //??????array???????????????
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

  
  function handleChange(e) {
    console.log('before upload')
    const fileData = e.target.files[0];
    var fileReader = new FileReader();
    //????????????????????????
    fileReader.onload = function(e) {
        const bufferData = e.target.result;
        console.log(Buffer.from(bufferData))
        if(bufferData){
          uploadFile(Buffer.from(bufferData));
        }  
    }
    fileReader.readAsArrayBuffer(fileData);

  }

  function handleClick() {
    const filedom = document.getElementById('file');
    filedom.click()
    
    createPairKeys();
    
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
    contract.methods.setValues((props.hash).toString(), priv_key, props.price, (props.desc).toString(), (props.opValue).toString(), iv, enc_SymmeKey).send({
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
    alert('????????????');
    //console.log(props.array);
    /* setPrice();
    setOpValue();
    setDesc(""); */
    // onChange={handleOpValue}
  }


  
  return(
    <div>
      <div>
        <img src={logo} className='pic-logo'></img>
      </div>
    <div className='border-form'>
      <h2>?????????????????????</h2>
      <form className='' onSubmit={handleSubmit} > 
      <div>
        <label>
          ??????:
        </label>
        <input type="text" className='input' onChange={handleOpValue}></input>
      </div>
      <div>
        <label>
          ??????:
        </label>
        <input type="text" className='input' onChange={handleString}></input>
      </div>
      <div>
        <label>
          ??????:
        </label>
        <input type="number" className='input' placeholder='??????: Ether' onChange={handlePrice}></input>
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
        <button className='button chosefiles' onClick={handleClick}>?????????????????????</button>
      </div>   
    </div>
    <div>
      <br></br>
      <p>????????????????????????????????????????????????????????????</p>
      <br></br>
      <br></br>
      
    </div>
    </div>
  )
}

export default Upload;

/* class Upload extends Component() {

  // ????????????????????????????????????
  getFilds = () =>{
    const filedom = document.getElementById('file');
    filedom.click()
  }
  // ?????????????????????????????????
  fileinputChange = (event) =>{
    const fileData = event.target.files[0];
    if(fileData){
        this.setState({newFile: fileData});
        alert("yes!");
    }
    // ?????????????????? fileData
    // if(fileData){
    //   this.setState({ fileData, })
    //   const formdata = new FormData();
    //   formdata.append("wordType",3);
    //   formdata.append("file",fileData);
    //   this.send(formdata)
    // }
  }
  // ????????????
  // send =  async (formdata) =>{
  //   // const url = "url";
  //   fetch(url, {
  //     method:'post',
  //     headers:{
  //       "X-token":token,
  //     },
  //     body:formdata,
  //   }).then(res=>res.json()).then(res=>{
  //     // ???????????????
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
        <button onClick={this.getFilds}>?????????????????????</button>
      </div>
    )
  }
    
} */