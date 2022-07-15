import React from 'react';

function PlayerMeta(props) {
	var playerr_details = {
			details: props.details,
			team: props.team,
			pos: props.pos,
			photo: props.photo,
      captain: false,
      v_captain: false
	}
	return (
	<li className="list-group-item " style={{fontSize: 15}}>
		<div className="player-meta d-flex" onClick={() => {props.p_selected(playerr_details)}} style={{cursor: "pointer"}}>
			<div className="player-photo col-2">
				<img alt={`${props.firstname}`} src={props.photo} height={50}></img>
			</div>
			<div className="name d-flex col-3 flex-column">
				<div className="first-name">{props.firstname}</div>
				<div className="last-name">{props.secondname}</div>
			</div>
      <div className='player-team col-2 d-flex justify-content-center'>{props.pos}</div>
			<div className="player-position col-3 d-flex justify-content-center">{props.team}</div>
			<div className="player-number col-2 badge bg-success mt-2 mb-2 d-flex justify-content-center align-items-center">£{props.price}</div>
		</div>
	</li>
  );
}


export default function PlayerSearchResultsDisplay(props) {
  //for player images
  const imgcode = (code) => {
      const img = "https://resources.premierleague.com/premierleague/photos/players/110x140/p"
      +code.toString()+".png"
      return img;
  };

  //team code to team name
  const findteam = (code) => {
      return  props.searchResults.teams[code-1];
  }

  const pos = ["GKP", "DEF", "MID", "FWD"];

  if(props.searchResults.result.length === 0){
    return (
      <div className="m-3">
          <div className='text-center lead'>Players Not Found</div>
      </div>
    );
  }
  return (
    <div className="m-3">
      <ul class="list-group w-100">
        {props.searchResults.result.map((player) => {
          return (
            <PlayerMeta
              key={player.id}
              details={player}
              team={findteam(player.team)}
              pos={pos[player.element_type-1]}
              photo={imgcode(player.code)}
              firstname={player.first_name}
              secondname={player.second_name[0]+'.'}
              price={player.now_cost}
              p_selected={props.p_selected}
            />
          );
        })}
      </ul>
    </div>
  );
      
}