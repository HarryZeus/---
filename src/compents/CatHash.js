import React, { useState } from 'react';
import ipfsLogo from '../IPFS_logo.png';

function CatHash(){
   const [input_cid, setInput_cid] = useState("");
   const href = 'https://ipfs.io/ipfs/'+input_cid;
   function handleChange(e) {
      setInput_cid(e.target.value);
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      alert(input_cid);
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
        </form>
        <div className='redirect'>
          <h4><a href={href}>在网关中查看你的文件</a></h4>
        </div>
      </div>

    </div>
      )
    
  }
  
  
  export default CatHash;