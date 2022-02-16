import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginReg from './pages/LoginReg';
import Home from './pages/Home';
import SelectYourTeam from './pages/SelectYourTeam';
import MyTeam from './pages/MyTeam';

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/selectyourteam" element={<SelectYourTeam/>}/>
            <Route path="/login" element={<LoginReg/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/myteam" element={<MyTeam/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
