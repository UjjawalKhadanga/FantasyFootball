import React from 'react'
import Login from '../components/Login/Login.jsx'
import Register from '../components/Register/Register.jsx'

export default function LoginReg(props) {
  return (
      <div className="container">
          <Login/>
          <Register />
      </div>
  );
}