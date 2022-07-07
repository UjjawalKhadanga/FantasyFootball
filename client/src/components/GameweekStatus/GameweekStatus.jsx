import React,{useState,useEffect} from 'react'
import axios from 'axios'

function GameweekStatus() {
    const [gameweek,setGameweek] = useState(0)
    const [currentPlayers,setCurrentPlayers] = useState({DEF: [], MID: [], GKP: [], FWD: [] })

    const getCurrentGameweek = async () => {
        const res = await axios.get('http://localhost:8080/api/bootstrap-static/');
        const currentGameweek = await res.data.events.find(event => event.is_current === true);
        console.log(currentGameweek)
        return ;
    }
    const getGameweekScores = async () => {
        const res = await axios.get(`http://localhost:8080/api/event/${gameweek}/live/`);
        console.log(res.data);
        
    }
    const getCurrentPlayers = () => {
        axios.get('http://localhost:8080/getplayers/',{withCredentials:true}).then((res) =>{
            setCurrentPlayers(res.data.players)
        })
    }
    useEffect(()=>{
        const func = async () => {
            const players=await axios.get('http://localhost:8080/getplayers/',{withCredentials:true});
            console.log(players.data)
            setCurrentPlayers(players.players)
            console.log("after")
        }
        func();
    },[])

    
  return (
    <div className='container border'>
        <h1>Gameweek Status</h1>
        <p>Current Gameweek : {gameweek}</p>

    </div>
  )
}

export default GameweekStatus