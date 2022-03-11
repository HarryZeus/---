import React, { useState } from 'react';


function CatHash(){
   const [input_cid, setInput_cid] = useState("");

   function handleChange(e) {
      setInput_cid(e.target.value);
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      alert(input_cid);
      // 输入的cid 被 暂时存放在input_cid中，可进行ipfs.cat(cid)
    }
      return (
        <form onSubmit={handleSubmit}>
          <label className='label catHash_label' htmlFor='new-cid-input'>
            请输入cid, 检索对应的文件
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
      )
    
  }
  
  
  export default CatHash;