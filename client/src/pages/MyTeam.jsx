import React,{useEffect,useState} from 'react'
import axios from 'axios';
import MyteamDisplay from '../components/MyteamDisplay'
import MyTeamList from '../components/MyTeamList'

function MyTeam() {
  const   [teamData, setTeamData] = useState({"GKP": [], "DEF": [], "MID": [], "FWD": []});
  useEffect(async () => {
    const userId='62110b17e33e33dc305f17be'//test value for now
    const DBteamData = await axios.get('http://localhost:8080/getplayers/'+userId);
    setTeamData(DBteamData.data)
  },[])

  const updateTeam = async (newData) => {
    const res=axios.post('http://localhost:8080/addplayer/updateteam',{
      team: newData,
      userId: '62110b17e33e33dc305f17be'//test value for now
    })
    setTeamData(newData);
  }

  return (
    <div className='row'>
        <div className="col-8">
            <MyteamDisplay teamData={teamData} updateTeam={updateTeam}/>
        </div>
        <div className="col-4">
            <MyTeamList teamData={teamData}/>
        </div>
            
    </div>
  )
}

export default MyTeam