import React from 'react';
import { useLocation } from 'react-router-dom';



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
	<li className="list-group-item" style={{fontSize: 15}}>
		<div className="player-meta d-flex">
			<div className="player-photo col-2 ">
				<img alt="player" src={props.player.photo} height={50}></img>
			</div>
			<div className="name col-4 d-flex flex-column">
				<div className="first-name">{props.player.details.first_name[0]}.{props.player.details.second_name}</div>
				<div className="last-name"></div>
			</div>
			<div className="player-team col-3 d-flex justify-content-center">{props.player.team}</div>
			<div className="player-number col-2 badge bg-success d-flex justify-content-center align-items-center">£{props.player.details.now_cost}</div>
      <button className='btn btn-danger col-1 d-flex' onClick={() => {props.saveMyTeam(props.idx, props.player.pos)}}>-</button>
		</div>&nbsp;
    
	</li>
  );
}

export default function MyTeamList(props) {

  const saveMyTeam = async (idx, pos) => {

    var newTeamData = {...props.teamData};
    newTeamData[pos].splice(idx, 1);
    props.delPlayer(newTeamData);
  }
  
  return (
    <>
      <div className='my-team-list border border-2 border-dark'>
        <div className='p-3'>
          <div className='d-flex justify-content-center h3 m-3' style={{background:"hite"}}>Budget left : {props.budget}</div>
          <div className="text-center lead">Team Status: {
             (2-props.teamData.GKP.length +  5-props.teamData.DEF.length +  6-props.teamData.MID.length +  2-props.teamData.FWD.length === 0) ?
             "Complete"
             :
             "Incomplete"
          } </div>
          <div className='row p-1 h5' style={{background:"skyblue"}}>Goalkeepers ({2 - props.teamData.GKP.length} left)</div>
          <div className='GKP-content row'>
            {props.teamData.GKP.map((player, idx) => {
                return <PlayerMeta player={player} saveMyTeam={saveMyTeam} idx={idx}/>
            })}
          </div>
          <div className='row p-1 h5' style={{background:"pink"}}>Defenders ({5 - props.teamData.DEF.length} left)</div>
          <div className='DEF-content row'>
            {props.teamData.DEF.map((player, idx) => {
                return <PlayerMeta player={player} saveMyTeam={saveMyTeam} idx={idx}/>
            })}
          </div>
          <div className='row p-1 h5' style={{background:"orange"}}>Midfielders ({6 - props.teamData.MID.length} left)</div>
          <div className='MID-content row'>
            {props.teamData.MID.map((player, idx) => {
                return <PlayerMeta player={player} saveMyTeam={saveMyTeam} idx={idx}/>
            })}
          </div>
          <div className='row p-1 h5' style={{background:"darkkhaki"}}>Forwards ({2 - props.teamData.FWD.length} left)</div>
          <div className='FWD-content row'>
            {props.teamData.FWD.map((player, idx) => {
                return <PlayerMeta player={player} saveMyTeam={saveMyTeam} idx={idx}/>
            })}
          </div>
        </div>
      </div>
      {
        // if location.pathname is /selectyourteam then show save button
        useLocation().pathname === '/selectyourteam' &&
        <div className="row m-3">
          {/* <button className="btn btn-primary btn-lg btn-block" onClick={saveMyTeam}>Save</button> */}
        </div>
      }
    </>

  );

}
