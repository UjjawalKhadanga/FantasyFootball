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

  const [myteam_view, setMyteam] = React.useState(false);
  const myteam_view_fn = (cdata) => {
      setMyteam(cdata);
  }
  React.useEffect(() => {
  }, [myteam_view])  

  if(myteam_view){
    return (
      <div className="App">
        <Navbar mtv={myteam_view_fn}/>
        <div className='row'>
          <MyteamDisplay/>
          <MyTeamList/>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <Navbar mtv={myteam_view_fn}/>
        <div className='row'>
          <PlayerSelector p_selected={ctp}/>
          <PlayerStats player={pdata}/>
          <MyTeamList/>
        </div>
      </div>
    );
  }
}

export default App;
