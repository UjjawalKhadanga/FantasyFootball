import axios from 'axios'
import React,{useState} from 'react'

export default function Login() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault()
        console.log(name,email,password)
        const res = await axios.post('http://localhost:8080/register',
        {
            name,
            email,
            password
        });
        console.log(res)
    }

  return (
    <div className="container p-5">
      <div className='h3 text-center d-block'>Register</div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <div className="mb-3">
          <label htmlFor="name-reg" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name-reg"
            aria-describedby="nameHelp"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email-reg" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email-reg"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password-reg" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password-reg" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
