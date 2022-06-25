import PlayerSelector from '../components/PlayerSelector/PlayerSelector';
import PlayerStats from '../components/PlayerStats';
import MyTeamList from '../components/MyTeamList';
import React,{useEffect, useState} from 'react';
import axios from 'axios';

function SelectYourTeam() {
  const [playerData, setPlayerData] = useState("");
  const [teamData, setTeamData] = useState({"GKP": [], "DEF": [], "MID": [], "FWD": []});

  useEffect(() => {
    const getData=async ()=>{
      const DBteamData = await axios.get('http://localhost:8080/getplayers/',{withCredentials:true});
      setTeamData(DBteamData.data)
    }
    getData()
  },[])
  
  const addPlayer = async (data) => {
    for(let i = 0; i < teamData[data.pos].length; i++){
      if(teamData[data.pos][i].details==data.details){
        return alert(`${data.details.first_name} ${data.details.second_name} is already on your team`);
      }
    }
    let newTeamData = {...teamData};
    newTeamData[data.pos].push(data);
    const res=await axios.post('http://localhost:8080/addplayer',{
      team: newTeamData
    },{withCredentials:true})
    console.log(res)
    setTeamData(newTeamData);
  }

  const delPlayer = async (newTeamData) => {
    const res=await axios.post('http://localhost:8080/addplayer/updateteam',{
      team: newTeamData
    },{withCredentials:true})
    console.log(res)
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
        <MyTeamList teamData={teamData} delPlayer={delPlayer}/>
      </div>
    </div>
  );
}

export default SelectYourTeam