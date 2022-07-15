import React from 'react'
import { useNavigate } from 'react-router-dom'
import GameweekStatus from '../components/GameweekStatus/GameweekStatus'

function Home({isLogged}) {
  const Navigate=useNavigate();
  if(!isLogged){
    return (
      <div className="container">
       <div className="jumbotron">
          <h1 className="display-4">Dashboard</h1>
          <hr className="my-4" />
            <div className="d-flex justify-content-center">
              <p className="lead m-3">
                You are Not Logged In
              </p>
              <button className='btn btn-dark' onClick={()=>{Navigate('/loginregister')}}>Login/Register</button>
            </div>
        </div>
      </div>
    )
  }
  return (
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-4">Dashboard</h1>
          <hr className="my-4" />
          <p className="lead"></p>
        </div>
        <GameweekStatus/>
      </div>
  )
}

export default Home