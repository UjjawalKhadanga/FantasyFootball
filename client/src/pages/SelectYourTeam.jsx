import PlayerSelector from '../components/PlayerSelector/PlayerSelector';
import PlayerStats from '../components/PlayerStats';
import MyTeamList from '../components/MyTeamList';
import React,{useEffect, useState} from 'react';

function SelectYourTeam() {
  const [playerData, setPlayerData] = useState("");

  const [teamData, setTeamData] = useState({"GKP": [], "DEF": [], "MID": [], "FWD": []});
  useEffect(() => {console.log(teamData)},[teamData])

  const addPlayer = (data) => {
    if(!teamData[data.pos].includes(data)){
      let newTeamData = {...teamData};
      newTeamData[data.pos].push(data);
      setTeamData(newTeamData);
      return;
    }
    return alert(`${data.details.first_name} ${data.details.second_name} is already on your team`);
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