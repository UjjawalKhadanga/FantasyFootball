import './App.css';

// import Navbar from './components/Navbar/Navbar';
// import PlayerSelector from './components/PlayerSelector/PlayerSelector';
// import PlayerStats from './components/PlayerStats';
// import MyTeamList from './components/MyTeamList';
// import MyteamDisplay from './components/MyteamDisplay';
// import React from 'react';


  
  // //player selected from list
  // const [pdata, setPdata] = React.useState("");
  // const ctp = (cdata) => {
  //     setPdata(cdata);
  // }
  // React.useEffect(() => {
  //     //console.log(pdata);
  // }, [pdata])

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginReg from './pages/LoginReg';
import Home from './pages/Home';
import SelectYourTeam from './pages/SelectYourTeam';
import MyTeam from './pages/MyTeam';

function App() {


  // //load MY Team page from navbar
  // const [myteam_view, setMyteam_view] = React.useState(false);
  // const myteam_view_fn = (cdata) => {
  //     setMyteam_view(cdata);
  // }
  // React.useEffect(() => {
  //   console.log("Y");
  // }, [myteam_view])  

  // //update myteam list
  // const default_team = {
  //   gkp: [],
  //   def: [],
  //   mid: [],
  //   fwd: [],
  //   all: []
  // }
  // const [myteam, setMyteam] = React.useState(default_team);
  // const myteam_fn = (cdata) => {
  //   for(var i=0; i<myteam.all.length; i++)
  //   {
  //     if(myteam.all[i].details.id == cdata.details.id || myteam.all.length == 15) return;
  //   }
  //   var tmpteam = {...myteam};
  //   if(cdata.pos == "GKP"){
  //     tmpteam.gkp.push(cdata);
  //   }else if(cdata.pos == "DEF"){
  //     tmpteam.def.push(cdata);
  //   }else if(cdata.pos == "MID"){
  //     tmpteam.mid.push(cdata);
  //   }else if(cdata.pos == "FWD"){
  //     tmpteam.fwd.push(cdata);
  //   }
  //   tmpteam.all = tmpteam.gkp.concat(tmpteam.def.concat(tmpteam.mid.concat(tmpteam.fwd)));
  //   setMyteam(tmpteam);
  // }

  // //swap function
  // var p_to_swap=-1;
  // const swap_fn = (x) => {
  //   if(p_to_swap == -1){p_to_swap = x;}
  //   else{
  //     var tmpteam = {...myteam};
  //     var tmp = tmpteam.all[x];
  //     tmpteam.all[x] = tmpteam.all[p_to_swap];
  //     tmpteam.all[p_to_swap] = tmp;
  //     p_to_swap = -1;
  //     setMyteam(tmpteam);
  //   }
  // }
  // React.useEffect(() => {
  //   console.log(myteam.all);
  // }, [myteam])

  // if(myteam_view){
  //   return (
  //     <div className="App">
  //       <Navbar mtv={myteam_view_fn} teamsize={myteam.all.length}/>
  //       <div className='row'>
  //         <MyteamDisplay myteam={myteam} swap_fn={swap_fn}/>
  //         <MyTeamList myteam_fn={myteam_fn} myteam={myteam}/>
  //       </div>
  //     </div>
  //   );
  // }
  // else{
  //   return (
  //     <div className="App">
  //       <Navbar mtv={myteam_view_fn} teamsize={myteam.all.length}/>
  //       <div className='row'>
  //         <PlayerSelector p_selected={ctp}/>
  //         <PlayerStats player={pdata} myteam={myteam_fn}/>
  //         <MyTeamList myteam_fn={myteam_fn} myteam={myteam}/>
  //       </div>
  //     </div>
  //   );
  // }
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
