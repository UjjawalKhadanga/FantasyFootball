import React,{useEffect,useState} from 'react'
import axios from 'axios';
import MyteamDisplay from '../components/MyteamDisplay'
import MyTeamList from '../components/MyTeamList'

function MyTeam() {
  const   [teamData, setTeamData] = useState({"GKP": [], "DEF": [], "MID": [], "FWD": []});
  const [budget, setBudget] = useState(1000);

  useEffect(() => {
    const getData= async ()=>{
      const DBteamData = await axios.get('http://localhost:8080/getplayers/',{withCredentials:true});
      setTeamData(DBteamData.data.players)
      setBudget(DBteamData.data.budget)
    }
    getData();
  },[])

  const updateTeam = async (newData) => {
    await axios.post('http://localhost:8080/addplayer/updateteam',{
      team: newData
    },{withCredentials:true})
    setTeamData(newData);
  }

  return (
    <div className="p-2 m-2 ">
      <div className='row'>
        <div className="col-8">
            <MyteamDisplay teamData={teamData} updateTeam={updateTeam}/>
        </div>
        <div className="col-4 border border-2 border-dark"  style={{height: "89vh", overflow:"auto", overflowX:"hidden"}}>
            <MyTeamList teamData={teamData} budget={budget}/>
        </div>
      </div>
    </div>

  )
}

export default MyTeam