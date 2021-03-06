import React from 'react';

export default function PlayerStats({player}) {

  var teamcodes = 
  ['ARS','AVL','BRE','BHA','BUR', 'CHE','CRY', 'EVE','LEI',  'LEE',
   'LIV', 'MCI','MUN',  'NEW','NOR', 'SOU','TOT',  'WAT','WHU',  'WOL'
	];
  if(player){
  return <div className='player.details-stats col'>
      <div className='col text-center'>
        <img src={player.photo} alt="" height={250} width={200} />
        <div>
          <div className='row'>
            <h1 className='col-2 badge bg-success ml-5 mr-5 mt-2'>£{player.details.now_cost/10}</h1>
            <h2 className='col text-center'>{player.details.first_name}&nbsp;{player.details.second_name}</h2>
            <h6 className='col-2'>{player.team}</h6>
          </div>
          <h6 className=''>{player.pos}</h6>
          <div className='row bg-info'>
            <div className='col text-center'>Form</div>
            <div className='col text-center'>Influence</div>
            <div className='col text-center'>Creativity</div>
            <div className='col text-center'>Threat</div>
          </div>
          <div className='row border border-black'>
            <div className='col text-center'>{player.details.form}</div>
            <div className='col text-center'>{player.details.influence}</div>
            <div className='col text-center'>{player.details.creativity}</div>
            <div className='col text-center'>{player.details.threat}</div>
          </div>
          <div className='row bg-info'>
            <div className='col text-center'>This Week Pts</div>
            <div className='col text-center'>Total Pts</div>
            <div className='col text-center'>Average Pts</div>
            <div className='col text-center'>Minutes Played</div>
          </div>
          <div className='row border border-black'>
            <div className='col text-center'>{player.details.event_points}</div>
            <div className='col text-center'>{player.details.total_points}</div>
            <div className='col text-center'>{player.details.points_per_game}</div>
            <div className='col text-center'>{player.details.minutes}</div>
          </div>
          <div className='row bg-info'>
            <div className='col text-center'>Goals Scored</div>
            <div className='col text-center'>Goals Conceeed</div>
            <div className='col text-center'>Assists</div>
            <div className='col text-center'>Own Goals</div>
          </div>
          <div className='row border border-black'>
            <div className='col text-center'>{player.details.goals_scored}</div>
            <div className='col text-center'>{player.details.goals_conceded}</div>
            <div className='col text-center'>{player.details.assists}</div>
            <div className='col text-center'>{player.details.own_goals}</div>
          </div>
          <div className='row bg-info'>
            <div className='col text-center'>Saves</div>
            <div className='col text-center'>Clean Sheets</div>
            <div className='col text-center'>Yellow Cards</div>
            <div className='col text-center'>Red Cards</div>
          </div>
          <div className='row border border-black'>
            <div className='col text-center'>{player.details.saves}</div>
            <div className='col text-center'>{player.details.clean_sheets}</div>
            <div className='col text-center'>{player.details.yellow_cards}</div>
            <div className='col text-center'>{player.details.red_cards}</div>
          </div>
          <div className='row'>
            <button className='btn btn-primary mt-3' style={{width: "20%", margin: "auto"}}>Buy</button>
          </div>
        </div>
      </div>
  </div>;
  }else{
    return <div>Select Player</div>
  }
}
