import React, { useState } from 'react';
import ipfsLogo from '../IPFS_logo.png';
import { create } from 'ipfs-http-client';

const ipfs = create('http://127.0.0.1:5001');

function CatHash(props){
   const [input_cid, setInput_cid] = useState("");
   const href = 'https://ipfs.io/ipfs/'+input_cid;

  /*  const [pub_key, setPub] = useState();
   const [iv, setIv] = useState();
   const [enc_SymmeKey, setEnc] = useState();
   const [cid, setCid] = useState(); */

   async function Decode(){

      let key = crypto.publicDecrypt(Buffer.from(props.pk, 'hex'), Buffer.from(props.enc_Symm, 'hex'));
      //公钥解密，得到对称密钥
      const algorithm = 'aes192';
      const encoding = 'hex';

      const decrypt = (encrypted) => {
        const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(props.iv, 'hex'))
        return decipher.update(encrypted, encoding)    
      }

      const arr = [];
      var n = 0;
      for await (const buf of ipfs.cat(input_cid)) {
          //console.log(buf);
          n += buf.length;
          arr.push(buf);
      } 
      const ans = Buffer.concat(arr,n);
      // 得到密文，并使用对称密钥解密
      const decrypted = decrypt(ans);

      let blob = new Blob([decrypted], {type:'image/jpeg'});
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