import React, { useState } from 'react'
import Login from '../components/Login/Login.jsx'
import Register from '../components/Register/Register.jsx'


export default function LoginReg(props) {
  const [page,setPage]=useState(1);
  const handleClick = (e)=>{
    e.target.innerHTML==="Go to Login" ? 
      setPage(1) : setPage(0)

  }
  return (
    <div className='container'>
        {
          page ? 
          <Login setIslogged={props.setIslogged}/> :
          <Register setPage={setPage}/>
        }
        <button className='btn btn-outline-primary w-100' onClick={(e)=>{handleClick(e)}}>{page ? "Go to Register": "Go to Login"}</button>
    </div>
  );
}