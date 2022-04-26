import React, { useState } from 'react';
import ipfsLogo from '../IPFS_logo.png';
import { create } from 'ipfs-http-client';
import crypto from 'crypto';
const ipfs = create('http://127.0.0.1:5001');

function CatHash(props){
   const [input_cid, setInput_cid] = useState("");
   const href = 'https://ipfs.io/ipfs/'+input_cid;

  /*  const [pub_key, setPub] = useState();
   const [iv, setIv] = useState();
   const [enc_SymmeKey, setEnc] = useState();
   const [cid, setCid] = useState(); */

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

  /*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(pem) {
  // fetch the part of the PEM string between header and footer
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
  // base64 decode the string to get the binary data
  const binaryDerString = Base64.decode(pemContents);
  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString);

  return window.crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["decrypt"]
  );
}
   async function Decode(){

    /* 只使用对称加密时
    let symmetry = str2ab(Base64.decode(props.enc_Symm)); 
    console.log(new Uint8Array(symmetry)) 
    */
      const publicKey = await importPrivateKey(props.pk);

      let symmetry_tmp = Base64.decode(props.enc_Symm);
      let symmetry = str2ab(symmetry_tmp); 
      
      let key = await window.crypto.subtle.decrypt(
        {
          name: "RSA-OAEP"
        },
        publicKey,
        symmetry
      );
      
      let uint8array_key = new Uint8Array(key);
      console.log(uint8array_key)

      let iv = new Uint8Array(str2ab(Base64.decode(props.iv)));
      console.log(iv) 

      const arr = [];
      var n = 0;
      for await (const buf of ipfs.cat(input_cid)) {
          //console.log(buf);
          n += buf.length;
          arr.push(buf);
      } 
      const ans = Buffer.concat(arr,n);
      // 得到密文，并使用对称密钥解密
      //const key_encoded = await window.crypto.subtle.importKey(  "raw",    (uint8array_key).buffer,  "AES-CTR"  ,  false,   ["decrypt"]);
      const key_encoded = await window.crypto.subtle.importKey(  "raw",    uint8array_key.buffer,  "AES-CTR"  ,  true,   ["encrypt","decrypt"]);
      const decrypted = await window.crypto.subtle.decrypt(
        {
          name: "AES-CTR",
          counter: iv,
          length: 64
        },
        key_encoded,
        ans.buffer
      )
      //const decrypted = decrypt(ans);
      console.log(new Uint8Array(decrypted));

      let blob = new Blob([decrypted], {type:'application/octet-stream'});
      let a = document.createElement('a');
      a.download = 'new' + '.jpg';
      a.href = URL.createObjectURL(blob)
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a); 
 
      //return decrypted;
   }
  

   function handleChange(e) {
      setInput_cid(e.target.value);
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      //alert(input_cid);
      Decode();

    }
      return (
    <div>
      <div>
        <img src={ipfsLogo} className='ipfs-logo'></img>
        <br></br>
        <br></br>
      </div>
  
      <div className='border-form'>
        <form onSubmit={handleSubmit}>
          <label className='label catHash_label' htmlFor='new-cid-input'>
            <h2>请输入cid, 检索对应的文件:</h2> <br/>
          </label>
          <input 
            id="new-cid-input" 
            type="text"
            className='input input_cid'
            name='text'
            autoComplete='off'
            value={input_cid} 
            onChange={handleChange}
          />
          <button type="submit">Download</button>
        </form>
        <div className='redirect'>
          <h4><a href={href}>在网关中查看你的文件</a></h4>
        </div>
      </div>
    </div>
      )
    
  }
  
  
  export default CatHash;