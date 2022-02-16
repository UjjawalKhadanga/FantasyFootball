import React from 'react';

export default function PlayerStats(props) {


  var teamcodes = 
  ['ARS','AVL','BRE','BHA','BUR', 'CHE','CRY', 'EVE','LEI',  'LEE',
   'LIV', 'MCI','MUN',  'NEW','NOR', 'SOU','TOT',  'WAT','WHU',  'WOL'
	];

  const buybtn_fn = () => {
    props.myteam(props.player);
  };

  // if(props.player){
  // return <div className='props.player.details-stats col'>
  //     <div className='col text-center'>
  //       <img src={props.player.photo} alt="" height={250} width={200} />
  //       <div>
  //         <div className='row'>
  //           <h1 className='col-2 badge bg-success ml-5 mr-5 mt-2'>£{props.player.details.now_cost}</h1>
  //           <h2 className='col text-center'>{props.player.details.first_name}&nbsp;{props.player.details.second_name}</h2>
  //           <h6 className='col-2'>{props.player.team}</h6>
  //         </div>
  //         <h6 className=''>{props.player.pos}</h6>
  //         <div className='row bg-info'>
  //           <div className='col text-center'>Form</div>
  //           <div className='col text-center'>Influence</div>
  //           <div className='col text-center'>Creativity</div>
  //           <div className='col text-center'>Threat</div>
  //         </div>
  //         <div className='row border border-black'>
  //           <div className='col text-center'>{props.player.details.form}</div>
  //           <div className='col text-center'>{props.player.details.influence}</div>
  //           <div className='col text-center'>{props.player.details.creativity}</div>
  //           <div className='col text-center'>{props.player.details.threat}</div>

  
  if(props.player){
  return (
    <div className="player.details-stats container border border-dark border-2 mt-3">
      <div className="col text-center">
        <img src={props.player.photo} alt="" height={250} width={200} />
        <div>
          <div className="row">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <div className="badge bg-success p-3">
                £{props.player.details.now_cost}
              </div>
            </div>
            <h2 className="col text-center">
              {props.player.details.first_name}&nbsp;{props.player.details.second_name}
            </h2>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <div className="h5">{props.player.team}</div>
            </div>
          </div>
          <div className="h6">{props.player.pos}</div>
          <div className="row bg-info">
            <div className="col text-center">Form</div>
            <div className="col text-center">Influence</div>
            <div className="col text-center">Creativity</div>
            <div className="col text-center">Threat</div>
          </div>
          <div className="row border border-black">
            <div className="col text-center">{props.player.details.form}</div>
            <div className="col text-center">{props.player.details.influence}</div>
            <div className="col text-center">{props.player.details.creativity}</div>
            <div className="col text-center">{props.player.details.threat}</div>

          </div>
          <div className="row bg-info">
            <div className="col text-center">This Week Pts</div>
            <div className="col text-center">Total Pts</div>
            <div className="col text-center">Average Pts</div>
            <div className="col text-center">Minutes Played</div>
          </div>

          <div className="row border border-black">
            <div className="col text-center">{props.player.details.event_points}</div>
            <div className="col text-center">{props.player.details.total_points}</div>
            <div className="col text-center">
              {props.player.details.points_per_game}
            </div>
            <div className="col text-center">{props.player.details.minutes}</div>

          </div>
          <div className="row bg-info">
            <div className="col text-center">Goals Scored</div>
            <div className="col text-center">Goals Conceeed</div>
            <div className="col text-center">Assists</div>
            <div className="col text-center">Own Goals</div>
          </div>

          <div className="row border border-black">
            <div className="col text-center">{props.player.details.goals_scored}</div>
            <div className="col text-center">
              {props.player.details.goals_conceded}
            </div>
            <div className="col text-center">{props.player.details.assists}</div>
            <div className="col text-center">{props.player.details.own_goals}</div>

          </div>
          <div className="row bg-info">
            <div className="col text-center">Saves</div>
            <div className="col text-center">Clean Sheets</div>
            <div className="col text-center">Yellow Cards</div>
            <div className="col text-center">Red Cards</div>
          </div>

          
            {/* <button id={props.player.details.id} className='btn btn-primary mt-3' onClick={buybtn_fn} style={{width: "20%", margin: "auto"}}>Buy</button> */}

          <div className="row border border-black">
            <div className="col text-center">{props.player.details.saves}</div>
            <div className="col text-center">{props.player.details.clean_sheets}</div>
            <div className="col text-center">{props.player.details.yellow_cards}</div>
            <div className="col text-center">{props.player.details.red_cards}</div>
          </div>
          <div className="row">
            <button className="btn btn-primary mt-3" onClick={()=>{props.addPlayer(props.player)}}>Buy</button>

          </div>
        </div>
      </div>
    </div>
  );
  }else{
    return <div className='player.details-stats container border border-dark border-2 mt-3'>No Player Selected</div>
  }
}
