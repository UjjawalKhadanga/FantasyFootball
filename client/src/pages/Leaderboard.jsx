import axios from 'axios';
import React, {useState, useEffect} from 'react'
import GameweekStatus from '../components/GameweekStatus/GameweekStatus';


export default function Leaderboard() {
  const [GameWeekNumber,setGameWeekNumber] = useState(0);
  const [UserData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const getAllUserData=async ()=>{
    const DBuserData = await axios.get('http://localhost:8080/userdata/',{withCredentials:true});
    let sortedData = DBuserData.data;
    
    for(let i=0; i<sortedData.length; i++){
      sortedData[i].points = sortedData[i].points.reduce((sum, x) => sum+x, 0);
    }
    sortedData.sort((u1, u2) => {
      return u2.points - u1.points;
    });
    setUserData(sortedData);
    setLoading(false);
  }

  const getUserData=async (gw)=>{
    const DBuserData = await axios.get('http://localhost:8080/userdata/',{withCredentials:true});
    let sortedData = DBuserData.data;
    
   
    for(let i=0; i<sortedData.length; i++){
      sortedData[i].points = sortedData[i].points[gw-1];
    }
  
    console.log(sortedData);
    sortedData.sort((u1, u2) => {
      return u2.points - u1.points;
    });
    setUserData(sortedData);
    setLoading(false);
  }

  if(!UserData) {getAllUserData();}
  useEffect(() => {
    getAllUserData()
  },[])
  useEffect(()=>{
    if(GameWeekNumber == 0){
      getAllUserData();
    }else{
      getUserData(GameWeekNumber);
    }
  },[GameWeekNumber])
  if(loading){
    return(
      <div>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <div>
      <div>
        <div className="row">
          <div className="col-1">
            <label for="gameweek_number" className="form-label mt-2 pl-2">
              GameWeek
            </label>
          </div>
          <div className="col-2">
            <select id="gameweek_number" className="form-select" onChange={(e)=>{setGameWeekNumber(e.target.value)}}>
                <option value="0">ALL</option>
              {
                Array(38).fill(1).map((i,id) => {
                  return  <option value={id+1}>{id+1}</option>;
                })
              }
            </select>
          </div>
        </div>
      </div>



      </div>
      <Leaderboard_Table UserData={UserData}/>
    </div>
  )
}



function Leaderboard_Table(props) {

  
  return (
    <div>

        <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">Rank</th>
            <th scope="col">Username</th>
            <th scope="col">Team Name</th>
            <th scope="col">Points</th>
            </tr>
        </thead>
        {
          props.UserData.map((user, idx) => {
          return (
            <tbody>
            <tr>
            <th scope="row">{idx+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.points}</td>
            </tr>
            </tbody>)
        })
      }
        
        </table>

        

    </div>
  )
}
