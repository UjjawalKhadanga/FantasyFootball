import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Scores({DEF,MID,FWD,GKP,gameweekScores}) {
    const [score,setScore]=useState(0);

    const [bestPlayerScore,setBestPlayerScore]=useState(0)
    const [bestPlayer,setBestPlayer]=useState("{PlayerName}")

    useEffect(()=>{
        for(let i=0;i<DEF.length;i++){
            setScore(score+gameweekScores[DEF[i].details.id].stats.total_points);
        }
        for(let i=0;i<FWD.length;i++){
            setScore(score+gameweekScores[FWD[i].details.id].stats.total_points);
        }
        for(let i=0;i<GKP.length;i++){
            setScore(score+gameweekScores[GKP[i].details.id].stats.total_points);
        }
        for(let i=0;i<MID.length;i++){
            setScore(score+gameweekScores[MID[i].details.id].stats.total_points);
        }
    },[])
  return (
    <div className="container">
        <div className="row">
            <div className="col-4">
                Total Score : {score}
            </div>
            <div className="col-4">
                Best player : {bestPlayer}
            </div>
            <div className="col-4">
                Best player score : {bestPlayerScore}
            </div>
        </div>
        <div className="d-flex flex-row">
            GoalKeepers:
            {
                GKP.map((player)=>{
                    // return player.details.first_name
                    return <img classNames="p-1" src={player.photo} height='70' width="60" alt="player" />
                })
            }
        </div>
        <div className="d-flex flex-row">
            Defenders:
            {
                DEF.map((player)=>{
                    // return player.details.first_name
                    return <img classNames="p-1" src={player.photo} height='70' width="60" alt="player" />
                })
            }
        </div>
        <div className="d-flex flex-row">
            Midfielders:
            {
                MID.map((player)=>{
                    // return player.details.first_name
                    return <img classNames="p-1" src={player.photo} height='70' width="60" alt="player" />
                })
            }
        </div>
        <div className="d-flex flex-row">
            Forwards: 
            {
                FWD.map((player)=>{
                    // return player.details.first_name
                    return <img classNames="p-1" src={player.photo} height='70' width="60" alt="player" />
                })
            }
        </div>
    </div>
  )
}



function GameweekStatus() {
    const [gameweek,setGameweek] = useState(0)
    const [currentPlayers,setCurrentPlayers] = useState({DEF: [], MID: [], GKP: [], FWD: [] })
    const [gameweekScores,setGameweekScores] = useState([]);
    const getCurrentGameweek = async () => {
        const res = await axios.get('http://localhost:8080/api/bootstrap-static/');
        console.log(res.data.events);
        const currentGameweek = await res.data.events.find((ele)=>{return ele.is_current===true});
        console.log(currentGameweek)
        if(!currentGameweek){
            setGameweek(0);
        }else{
            setGameweek(currentGameweek);
        }
    }
    
    const getGameweekScores = async () => {
        const res = await axios.get(`http://localhost:8080/api/event/${gameweek}/live`);
        setGameweekScores(res.data.elements);
        console.log(res.data.elements); 
    }
    const getCurrentPlayers = () => {
        axios.get('http://localhost:8080/getplayers/',{withCredentials:true}).then((res) =>{
            setCurrentPlayers(res.data.players)
            console.log(res.data.players)
        })
    }
    useEffect(()=>{
        getCurrentPlayers()
        getCurrentGameweek().then(
            getGameweekScores()
        )
    },[])
    
  return (
    <div className='container border'>
        <h1>Gameweek Status</h1>
        <p>Current Gameweek : {gameweek}</p>
        <Scores DEF={currentPlayers.DEF} MID={currentPlayers.MID} FWD={currentPlayers.FWD} GKP={currentPlayers.GKP} gameweekScores={gameweekScores}/>
    </div>
  )
}

export default GameweekStatus