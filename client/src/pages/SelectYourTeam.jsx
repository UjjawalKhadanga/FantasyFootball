import PlayerSelector from '../components/PlayerSelector/PlayerSelector';
import PlayerStats from '../components/PlayerStats';
import MyTeamList from '../components/MyTeamList';
import React,{useEffect, useState} from 'react';
import axios from 'axios';

function SelectYourTeam() {
  const [playerData, setPlayerData] = useState("");

  const [teamData, setTeamData] = useState({"GKP": [], "DEF": [], "MID": [], "FWD": []});
  useEffect(async () => {
    const userId='620a1f57eb0dfaa9fc3e260d'//test value for now
    const DBteamData = await axios.get('http://localhost:8080/getplayers/'+userId);
    setTeamData(DBteamData.data)
  },[])

  const addPlayer = (data) => {
    for(let i = 0; i < teamData[data.pos].length; i++){
      if(teamData[data.pos][i].details==data.details){
        return alert(`${data.details.first_name} ${data.details.second_name} is already on your team`);
      }
    }
    let newTeamData = {...teamData};
    newTeamData[data.pos].push(data);
    setTeamData(newTeamData);  
  }


  return (
    <div className="row">
      <div className="col">
        <PlayerSelector p_selected={(data)=>{setPlayerData(data)}}/>
      </div>
      <div className="col">
        <PlayerStats player={playerData} addPlayer={(data)=>{addPlayer(data)}}/>
      </div>
      <div className="col">
        <MyTeamList teamData={teamData}/>
      </div>
    </div>
  );
}

export default SelectYourTeam