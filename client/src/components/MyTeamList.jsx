import React from 'react';


export default function MyTeamList(props) {
  return <div className='my-team-list border border-dark col-3'>
    <div className='text-center'>
      <div className='row h5' style={{background:"#9932CC"}}>Goalkeepers</div>
      <ul>
        {props.myteam.gkp.map((player, idx) => {
            return <li key={idx}>{player.details.first_name}&nbsp;{player.details.second_name}</li>
        })}
      </ul>
      <div className='row h5' style={{background:"DeepPink"}}>Defenders</div>
      <ul>
        {props.myteam.def.map((player, idx) => {
            return <li key={idx}>{player.details.first_name}&nbsp;{player.details.second_name}</li>
        })}
      </ul>
      <div className='row h5' style={{background:"yellow"}}>Midfielders</div>
      <ul>
        {props.myteam.mid.map((player, idx) => {
            return <li key={idx}>{player.details.first_name}&nbsp;{player.details.second_name}</li>
        })}
      </ul>
      <div className='row h5' style={{background:"#FF8C00"}}>Forwards</div>
      <ul>
        {props.myteam.fwd.map((player, idx) => {
            return <li key={idx}>{player.details.first_name}&nbsp;{player.details.second_name}</li>
        })}
      </ul>
    </div>
  </div>;
}
