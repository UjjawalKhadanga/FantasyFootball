import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Login(props) {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const Navigate = useNavigate()
  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log(email,password)
    const res = await axios.post('http://localhost:8080/login',
    {
        email,
        password
    },{withCredentials:true});
    console.log(res.data)

    if(res.data.success){
      window.sessionStorage.setItem("isLogged", true);
      props.setIslogged(true);
      Navigate('../selectyourteam')
    }
    else{
      alert('Invalid Credentials')
    }

  }
  return (
    <div className="container p-5">
      <div className='h3 text-center d-block'>Login</div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
      <div className="mb-3">
          <label htmlFor="email-log" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email-log"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password-log" className="form-label">
            Password
          </label>
          <input 
            type="password" 
            className="form-control" 
            id="password-log" 
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary" 
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
