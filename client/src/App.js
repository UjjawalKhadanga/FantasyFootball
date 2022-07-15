import './App.css';
import React,{useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginReg from './pages/LoginReg';
import Home from './pages/Home';
import SelectYourTeam from './pages/SelectYourTeam';
import MyTeam from './pages/MyTeam';
import Logout from './pages/Logout';
import Leaderboard from './pages/Leaderboard';

function App() {
  const [islogged,setIslogged]=useState(false);

  useEffect(() => {
    setIslogged(JSON.parse(window.sessionStorage.getItem("isLogged")));
  }, [])

  return (
      <BrowserRouter>
        <Navbar islogged={islogged}/>
        <Routes>
            <Route path="/selectyourteam" element={<SelectYourTeam/>}/>
            <Route path="/loginregister" element={<LoginReg setIslogged={setIslogged}/>}/>
            <Route path="/logout" element={<Logout setIslogged={setIslogged}/>}/>
            <Route path="/" element={<Home isLogged={islogged}/>}/>
            <Route path="/myteam" element={<MyTeam/>}/>
            <Route path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>
      </BrowserRouter>
  );

}

export default App;
