import React from 'react';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(props) {
const [todos,setTodos]= useState([
  {name:"Delete tasks",status:"create"},
  {name:"Update tasks",status:"inprogress"},
  {name:"Non yeyish tasks",status:"closed"},
  {name:"Pagination tasks",status:"create"},
  {name:"Delete tasks",status:"inprogress"},
  {name:"Drag And Drop tasks",status:"create"},
  {name:"Search tasks",status:"closed"},
])
const [inp,setInp] = useState({name:"",status:"create"})
const [selectedIndex,setSelectedIndex] = useState("")
function getIndex(i){
  setSelectedIndex(i)

}
function changeStatus(prev){
  todos[selectedIndex].status = prev
  console.log(prev);
  setSelectedIndex("")
  setTodos([...todos])

}
function addTask(){
  if(inp.name!==""){
    todos.push(inp)
    setTodos([...todos])
    toast("malumot qoshildi");
  }else{
    toast.error("malumot xato!")
  }
  setInp({...inp,name:""})
}
  return (
    <div className='main container py-5'>
      <div className='div1 mt-5'>
        <input value={inp.value} onChange={(e)=>{
          setInp({...inp,name:e.target.value})
        }} placeholder='add tasks...' type='text' className='form-control w-50 mx-3'/>
<button className='btn btn-primary mx-3' onClick={addTask}>add task</button>
      </div>
      <div className='div2 my-5'>
        <ul onDragOver={(e)=>{
          return e.preventDefault()
        
        }} onDrop={()=>{
          return changeStatus("create")
        }} className='mx-3 list-group w-100'>
          <li className='list-group-item bg-danger text-white '><h4>create</h4></li>
 {
  todos.map((item,index)=>{
    if(item.status==="create"){
      return (
        <li key={index} draggable onDrag={()=>{
          getIndex(index)
        }} className='list-group-item my-2 bg-dark text-white li'>{item.name}</li>
      )
    }
 
  })
 }
        </ul>
        <ul className='mx-3 list-group w-100' onDragOver={(e)=>{
          return e.preventDefault()
        }} onDrop={()=>{
          return changeStatus("inprogress")
        }}>
          <li className='list-group-item bg-dark text-white'><h4>Ingrogress</h4></li>
 {
  todos.map((item,index)=>{
    if(item.status==="inprogress"){
      return (
        <li draggable onDrag={()=>{
          getIndex(index)
        }} key={index} className='list-group-item my-2 bg-dark text-white li'>{item.name}</li>
      )
    }
 
  })
 }
        </ul>
        <ul onDragOver={(e)=>{
          return e.preventDefault()
        }} onDrop={()=>{
          return changeStatus("closed")
        }} className='mx-3 list-group w-100'>
          <li className='list-group-item bg-primary text-white'><h4>closed</h4></li>
 {
  todos.map((item,index)=>{
    if(item.status==="closed"){
      return (
        <li draggable onDrag={()=>{
          getIndex(index)
        }} key={index} className='list-group-item my-2 bg-dark text-white li'>{item.name}</li>
      )
    }
 
  })
 }
        </ul>

      </div>

      <ToastContainer />
    </div>
  );
}

export default App;