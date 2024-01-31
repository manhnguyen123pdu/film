import React, { useState } from 'react'
import { data } from '../data/data'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import "./style.css"
export default function Homepage() {
  const [dataAll, setData] = useState(data)
  const [dangChon, setDangchon] = useState([])
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
  })
  const [inputErr, setInputErr] = useState({
    name: "",
    phone: "",
    email: "",
    time: ""
  })

  const submit = () => {
    const temp = {
      ...(input.name === "" && { name: "Vui lòng nhập đầy đủ thông tin" }),
      ...(input.phone === "" && { phone: "Vui lòng nhập đầy đủ thông tin" }),
      ...(input.email === "" && { email: "Vui lòng nhập đầy đủ thông tin" }),
      ...(input.time === "" && { time: "Vui lòng nhập đầy đủ thông tin" }),
    };
    setInputErr(temp);

    let newData=[...data]
    for(let i=0; i<dangChon.length; i++){
      let findIndex= newData.findIndex((it)=>{return it.hang==dangChon[i].soGhe[0]})
      let findIndexGhe=newData[findIndex].danhSachGhe.findIndex((it)=>{return it.soGhe==dangChon[i].soGhe})
      newData[findIndex].danhSachGhe[findIndexGhe].daDat=true
    }
    alert(JSON.stringify(input))
    alert(JSON.stringify(dangChon))
    setData(newData) 
    setDangchon([])
    setInput({
      name: "",
      phone: "",
      email: "",
      time: "",
    })
  };
  
  return (
    <div className='content'>
      <div className='content_left'><ContentLeft data={dataAll} setDangchon={setDangchon} dangChon={dangChon} /></div>
      <div className='content_right'><ContentRight data={dataAll} input={input} inputErr={inputErr} submit={submit} setInput={setInput} setDangchon={setDangchon} dangChon={dangChon} /></div>
    </div>
  )
}
