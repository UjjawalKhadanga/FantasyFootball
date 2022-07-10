import axios from 'axios';
import React from 'react'
import {useNavigate} from 'react-router-dom'

function Logout(props) {
  const Navigate=useNavigate();
  const handleClick =async ()=>{
    const res = await axios.post('http://localhost:8080/logout',{},{withCredentials:true})
    // props.setIslogged(false);
    window.sessionStorage.setItem("isLogged", false);
    props.setIslogged(false);

    Navigate('../')
  }
  return (
    <div className='container d-flex flex-column'>
      <div className="h2 text-center p-4">
        Are you sure you want to log out?
      </div>
      <button className="btn btn-danger fs-3" onClick={(e)=>{e.preventDefault();handleClick();}}>Logout</button>
    </div>
  )
}

export default Logout