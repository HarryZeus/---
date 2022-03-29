import React, { useState } from 'react';
import Web3 from 'web3';

const web3 = new Web3(
    Web3.givenProvider || "ws://127.0.0.1:7545"
);

function Accounts(props){

    const [sk, setSk] = useState();


    function getCurrentBalance(address){
        web3.eth.getBalance(address)
        .then(n => {
            props.setBalance(n);
        })
    }
    function handleClick() {
        getCurrentBalance(props.acc);
    }


    function handleChange(e) {
        props.setAcc(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.setSigned(true);
        getCurrentBalance(props.acc);
    }

    function handleSubmit1(e) {
        e.preventDefault();
        const newAcc = web3.eth.accounts.create();
        props.setAcc(newAcc.address);
        setSk(newAcc.privateKey);
        getCurrentBalance(props.acc)
        props.setSigned(true);
    }

    function handleSignout() {
        props.setSigned(false);
    }
    const signUpTemplate = (
        <div>
            <h3>将你的以太坊账户与当前客户端绑定</h3>
            <div> 
                <input id="file" type="text" 
                    className='input'
                    placeholder='请输入已有的以太坊账户地址'
         	        onChange={handleChange}
                />
                <button type="submit" className='button bindAccount' onClick={handleSubmit}>绑定</button>
            </div>
            <div>
                <p>还没有账号? 那创建一个吧</p>
                <button type="submit" className='button bindAccount' onClick={handleSubmit1}>Sign-up</button>
            </div>
        </div>
    );

    const viewTemplate = (
        <div>
            <h3>当前的账户地址为: {props.acc}</h3>
            <p>sk: {sk} <br></br>
            请保存好私钥不要透露给别人, 注意该内容只显示一次</p>
            <br></br>
            <button onClick={handleClick}>刷新余额</button>
            <p>余额为: {props.balance} wei</p>
            <button onClick={handleSignout}>退出当前账户</button>
        </div>
    );

   
    return (
        <div>
            {props.isSigned ? viewTemplate : signUpTemplate}
        </div>
    )
    
}
  
  
  export default Accounts;