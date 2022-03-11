import React, { Component } from 'react';


class Upload extends Component {
  // 触发选择文件模拟点击事件
  getFilds = () =>{
    const filedom = document.getElementById('file');
    filedom.click()
  }
  // 用于监听按钮上传的事件
  fileinputChange = (event) =>{
    const fileData = event.target.files[0];
    if(fileData){
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

  render() {
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
}


export default Upload;
