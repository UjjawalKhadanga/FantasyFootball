import './App.css';
import Navbar from './components/Navbar/Navbar';
import PlayerSelector from './components/PlayerSelector/PlayerSelector';
import PlayerStats from './components/PlayerStats';
import MyTeamList from './components/MyTeamList';
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

  return (
    <div className="App">
      <Navbar/>
      <div className='row'>
        <PlayerSelector p_selected={ctp}/>
        <PlayerStats player={pdata}/>
        <MyTeamList/>
      </div>
    </div>
  );
}

export default App;
