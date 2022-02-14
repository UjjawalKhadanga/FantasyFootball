import React,{useEffect,useState} from 'react'
import axios from 'axios';
import MyteamDisplay from '../components/MyteamDisplay'
import MyTeamList from '../components/MyTeamList'

function MyTeam() {
  const   [teamData, setTeamData] = useState({"GKP": [], "DEF": [], "MID": [], "FWD": []});
  useEffect(async () => {
    const userId='620a1f57eb0dfaa9fc3e260d'//test value for now
    const DBteamData = await axios.get('http://localhost:8080/getplayers/'+userId);
    setTeamData(DBteamData.data)
  },[])

  return (
    <div className='row'>
        <div className="col-8">
            <MyteamDisplay />
        </div>
        <div className="col-4">
            <MyTeamList teamData={teamData}/>
        </div>
            
    </div>
  )
}

export default MyTeam