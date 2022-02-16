import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';



// export default function MyTeamList(props) {
//   return <div className='my-team-list border border-dark col-3'>
//     <div className='text-center'>
//       <div className='row h5' style={{background:"#9932CC"}}>Goalkeepers</div>
//       <ul>
//         {props.myteam.gkp.map((player, idx) => {
//             return <li key={idx}>{player.details.first_name}&nbsp;{player.details.second_name}</li>
//         })}
//       </ul>
//       <div className='row h5' style={{background:"DeepPink"}}>Defenders</div>
//       <ul>
//         {props.myteam.def.map((player, idx) => {
//             return <li key={idx}>{player.details.first_name}&nbsp;{player.details.second_name}</li>
//         })}
//       </ul>
//       <div className='row h5' style={{background:"yellow"}}>Midfielders</div>
//       <ul>
//         {props.myteam.mid.map((player, idx) => {
//             return <li key={idx}>{player.details.first_name}&nbsp;{player.details.second_name}</li>
//         })}
//       </ul>
//       <div className='row h5' style={{background:"#FF8C00"}}>Forwards</div>
//       <ul>
//         {props.myteam.fwd.map((player, idx) => {
//             return <li key={idx}>{player.details.first_name}&nbsp;{player.details.second_name}</li>
//         })}
//       </ul>
//     </div>
//   </div>;

function PlayerMeta(props) {
	return (
	<li className="list-group-item " style={{fontSize: 15}}>
		<div className="player-meta d-flex" onClick={() => {}} style={{cursor: "pointer"}}>
			<div className="player-photo col-2">
				<img src={props.photo} height={50}></img>
			</div>
			<div className="name col-3 d-flex flex-column">
				<div className="first-name">{props.firstname}</div>
				<div className="last-name">{props.secondname[0]}</div>
			</div>
			<div className="player-team col-5 d-flex justify-content-center">{props.team}</div>
			<div className="player-number col-2 badge bg-success mt-2 mb-2 d-flex justify-content-center align-items-center">£{props.cost}</div>
		</div>
	</li>
  );
}

export default function MyTeamList(props) {

  const saveMyTeam = async () => {
    const res=axios.post('http://localhost:8080/addplayer',{
      team: props.teamData,
      userId: '620a1f57eb0dfaa9fc3e260d'//test value for now
    })
  }
  
  return (
    <>
      <div className='my-team-list border border-2 m-3 border-dark'>
        <div className='p-3'>
          <div className='row h5' style={{background:"purple"}}>Goalkeepers</div>
          <div className='GKP-content row'>
            {props.teamData.GKP.map(player => {
                return <PlayerMeta key={player.id} firstname={player.details.first_name} secondname={player.details.second_name} photo={player.photo} cost={player.details.now_cost} team={player.team}/>
            })}
          </div>
          <div className='row h5' style={{background:"red"}}>Defenders</div>
          <div className='DEF-content row'>
            {props.teamData.DEF.map(player => {
                return <PlayerMeta key={player.id} firstname={player.details.first_name} secondname={player.details.second_name} photo={player.photo} cost={player.details.now_cost} team={player.team}/>
            })}
          </div>
          <div className='row h5' style={{background:"pink"}}>Midfielders</div>
          <div className='MID-content row'>
            {props.teamData.MID.map(player => {
                return <PlayerMeta key={player.id} firstname={player.details.first_name} secondname={player.details.second_name} photo={player.photo} cost={player.details.now_cost} team={player.team}/>
            })}
          </div>
          <div className='row h5' style={{background:"orange"}}>Forwards</div>
          <div className='FWD-content row'>
            {props.teamData.FWD.map(player => {
                return <PlayerMeta key={player.id} firstname={player.details.first_name} secondname={player.details.second_name} photo={player.photo} cost={player.details.now_cost} team={player.team}/>
            })}
          </div>
        </div>
      </div>
      {
        // if location.pathname is /selectyourteam then show save button
        useLocation().pathname === '/selectyourteam' &&
        <div className="row m-3">
          <button className="btn btn-primary btn-lg btn-block" onClick={saveMyTeam}>Save</button>
        </div>
      }
    </>

  );

}
