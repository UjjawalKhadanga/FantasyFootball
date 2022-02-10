import './App.css';
import Navbar from './components/Navbar/Navbar';
import PlayerSelector from './components/PlayerSelector/PlayerSelector';
import PlayerStats from './components/PlayerStats';
import MyTeamList from './components/MyTeamList';
import MyteamDisplay from './components/MyteamDisplay';
import React from 'react';

function App() {
  
  //player selected from list
  const [pdata, setPdata] = React.useState("");
  const ctp = (cdata) => {
      setPdata(cdata);
  }
  React.useEffect(() => {
      //console.log(pdata);
  }, [pdata])

  //load MY Team page from navbar
  const [myteam_view, setMyteam_view] = React.useState(false);
  const myteam_view_fn = (cdata) => {
      setMyteam_view(cdata);
  }
  React.useEffect(() => {
    console.log("Y");
  }, [myteam_view])  

  // var myt = [270, 275, 273, 555, 510, 282, 272, 277, 281, 485, 579, 269, 258, 288, 280];
  //update myteam list
  const [myteam, setMyteam] = React.useState([]);
  const myteam_fn = (cdata) => {
    for(var i=0; i<myteam.length; i++)
    {
      if(myteam[i].details.id == cdata.details.id) return;
    }
    var tmpteam = [...myteam];
    tmpteam.push(cdata);
    setMyteam(tmpteam);

  }
  React.useEffect(() => {
    console.log("X");
  }, myteam)

  //swap function
  var p_to_swap=-1;
  const swap_fn = (x) => {
    if(p_to_swap == -1){p_to_swap = x;}
    else{
      //if(myteam[x].pos != myteam[p_to_swap].pos) {alert("Please select players from same position!");return;}
      var tmpteam = [...myteam];
      var tmp = tmpteam[x];
      tmpteam[x] = tmpteam[p_to_swap];
      tmpteam[p_to_swap] = tmp;
      p_to_swap = -1;
      setMyteam(tmpteam);
    }
  }
  React.useEffect(() => {
    console.log("z");
  }, myteam)

  if(myteam_view){
    return (
      <div className="App">
        <Navbar mtv={myteam_view_fn} teamsize={myteam.length}/>
        <div className='row'>
          <MyteamDisplay myteam={myteam} swap_fn={swap_fn}/>
          <MyTeamList myteam_fn={myteam_fn} myteam={myteam}/>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <Navbar mtv={myteam_view_fn} teamsize={myteam.length}/>
        <div className='row'>
          <PlayerSelector p_selected={ctp}/>
          <PlayerStats player={pdata} myteam={myteam_fn}/>
          <MyTeamList myteam_fn={myteam_fn} myteam={myteam}/>
        </div>
      </div>
    );
  }
}

export default App;
