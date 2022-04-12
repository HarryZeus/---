import CatHash from './compents/CatHash';
import FileUpload from './compents/FileUpload';
import ShowStatus from './compents/ShowStatus';
import Home from './compents/Home';
import Accounts from './compents/Accounts';
import Purchase from './compents/Purchase';
import { Link, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import { nanoid } from "nanoid";
import './index.css';

function App(props) {

  const arrayContractAddress = '0x7D9E61F25A6Bafd608F2898E49CdC87656C96004';

  const [tasks, setTasks] = useState(props.tasks); // 卡片信息

  const [isSigned, setSigned] = useState(false); // 账户页面两种视图的切换
  const [acc, setAcc] = useState('');  // 保存当前用户的以太坊账户地址
  const [balance, setBalance] = useState(0); // 当前用户的以太坊账户余额

  //const [hash, setHash] = useState('');  // 保存 cid
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [opValue, setOpValue] = useState('');
  const [hash, setHash] = useState('');
  const [result, setResult] = useState('');

  const [purchaseId, setPurchaseId] = useState();
  const [itemPrice, set_Price] = useState(0); 

  const [Array, setArray] = useState(props.Array);
  const [Temp, setTemp] = useState(props.Temp);

  function setPurId(id) {
    setPurchaseId(id);
  }
  function setItemPrice(price) {
    set_Price(price);
  }
/* 
  function setHashContent(cid) {
      setHash(cid);
  } */

  // 每个数据发布的信息，被存储在tasks对象数组中
/*   function addTask(address, opValue, describe, price) {
    const newTask = { id: "item-" + nanoid(), contractAddress: address, opValue: opValue, describe: describe, price: price };
    setTasks([...tasks, newTask]);
  } */

  function addTask(address, opValue, describe, price) {
    const newTask = { id: "item-" + nanoid(), contractAddress: address, opValue: opValue, describe: describe, price: price };
    tasks.push(newTask);
    setTasks([...tasks]);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function addArray(desc, kind) {
    const newObj = {0: desc, 1: kind};
    Array.push(newObj);
    setArray([...Array]);
    if(Array[0] === {0: '', 1: ''}){
      Array.shift();
    }
  }

  function clearArray() {
    const start = {0: '', 1: ''};
    setArray([start]);
  }

  
  function addTemp(address, price) {
    const newObj = {0: address, 1: price};
    Temp.push(newObj);
    setTemp([...Temp]);
    if(Temp[0] === {0: '', 1: ''}){
      Temp.shift();
    }
  }

 /*  const taskList = tasks.map(task => (
    <div>
      <ShowStatus 
      id = {task.id}
      opValue={task.opValue}
      describe={task.describe}
      price={task.price}
      key={task.id}
      deleteTask={deleteTask}
    />
    </div>
    
  )); */
  const taskList = tasks.map(function(task, index){
    return (
      <ShowStatus 
      id = {task.id}
      index={index}
      address={task.contractAddress}
      opValue={task.opValue}
      describe={task.describe}
      price={task.price}
      key={task.id}
      addTask={addTask}
      deleteTask={deleteTask}
      setPurId={setPurId}
      setItemPrice={setItemPrice}

      arrayContractAddress={arrayContractAddress}


      addArray={addArray}
      clearArray={clearArray}
      Array={Array}

      addTemp={addTemp}
      Temp={Temp}
      />)
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Data Market</h1>
      </header>
      <div className='sideNav'>
        <nav className='sideBar'>
          <ul className='ul'>
            <li className='li'><Link className="active a" to="/home">主页</Link></li>
            <li className='li'><Link className='a' to="/accounts">账户</Link></li>
            <li className='li'><Link className='a' to="/status">数据板</Link></li>
            <li className='li'><Link className='a' to="/uploadfiles">发布</Link></li>
            <li className='li'><Link className='a' to="/catcontents">获得</Link></li>
          </ul>
        </nav>
      </div>
      <div className='show_contents'>
        <Routes>
            <Route path="/" component={App}>
                <Route path="/home" element={<Home />}/>
                <Route path="/accounts" element={<Accounts 
                      setSigned={setSigned}
                      isSigned={isSigned}
                      setAcc={setAcc}
                      acc={acc}
                      balance={balance}
                      setBalance={setBalance}
                />}/>
                <Route path="/uploadfiles" element={<FileUpload 
                      //setHashContent = {setHashContent}
                      addTask={addTask}

                      //cid={hash}
                      acc={acc}
                      

                      price={price}
                      setPrice={setPrice}
                      desc={desc}
                      setDesc={setDesc}
                      opValue={opValue}
                      setOpValue={setOpValue}
                      hash={hash}
                      setHash={setHash}
                      result={result}
                      setResult={setResult}

                      arrayContractAddress={arrayContractAddress}
                />}/>
                <Route path="/catcontents" element={<CatHash />}/>
                <Route path="/status" element={taskList}/>
                <Route path="/status/purchase" element={<Purchase 
                      purchaseId={purchaseId}
                      itemPrice={itemPrice}
                      acc={acc}
                      myMap={props.myMap}
                />} />
            </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
