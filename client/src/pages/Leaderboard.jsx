import axios from 'axios';
import React, {useState, useEffect} from 'react'


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
    if(GameWeekNumber === 0){
      getAllUserData();
    }else{
      getUserData(GameWeekNumber);
    }
  },[GameWeekNumber])
  if(loading){
    return(
      <div className='container d-flex justify-content-center mt-5'>
       <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      </div>
    );
  }
  return (
    <div>
      <div className='container'>
        <div className="row">
          <div className="d-flex justify-content-center mt-2">
          <div className="col-1 p-1">
            <label for="gameweek_number" className="form-label lead h-100">
              GameWeek:
            </label>
          </div>
          <div className="col-3">
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
          <hr className='my-4'/>
        </div>
      </div>
      <LeaderboardTable UserData={UserData}/>
    </div>
  )
}



function LeaderboardTable(props) {

  
  return (
    <div className='container'>
        <table className="table table-striped border">
        <thead>
            <tr>
            <th scope="col">Rank</th>
            <th scope="col">UserName</th>
            <th scope="col">Points</th>
            </tr>
        </thead>
        {
          props.UserData.map((user, idx) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{idx+1}</th>
                <td>@{user.name}</td>
                <td>{user.points}</td>
              </tr>
            </tbody>)
        })
      }
        
        </table>

        

    </div>
  )
}
