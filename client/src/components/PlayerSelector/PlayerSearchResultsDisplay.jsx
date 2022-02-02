import React from 'react';

function PlayerMeta(props) {
  var fname;
	if(props.firstname){fname = props.firstname[0];}
	var playerr_details = {
			details: props.details,
			team: props.team,
			pos: props.pos,
			photo: props.photo
	}
	return (
	<li className="list-group-item">
			
		<div className="row align-content-center" onClick={() => {props.p_selected(playerr_details)}} style={{cursor: "pointer"}}>
			<div className='player-team col-1'>{props.pos}</div>
			<div className="player-photo col-2">
				<img src={props.photo} height={50}></img>
			</div>
			<div className="name d-flex col-5">
				<div className="first-name">{fname}.</div>
				<div className="last-name">{props.secondname}</div>
			</div>
				
			<div className="player-position col-2">
					{props.team}
			</div>
			<div className="player-number col-2 badge bg-success pt-2 mb-4">£{props.price} </div>
				
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

  const data=props.searchResults;

  const pos = ["GKP", "DEF", "MID", "FWD"];

  return (
    <div className="m-3 border border-2 border-dark p-0 col d-flex flex-column justify-content-center align-items-center">
      <ul class="list-group">
      {/* <PlayerMeta details={data.result[0]}
                  price={data.result[0].now_cost/10}
                  pos={pos[data.result[0].element_type-1]}
                  firstname={data.result[0].first_name} 
                  secondname={data.result[0].second_name} 
                  team={data.teams[data.result[0].team - 1].short_name} 
                  photo={imgcode(data.result[0].code)}
                  p_selected={props.p_selected}/>   */}
      </ul>
      {/* {Object.keys(data.result).map((p, idx)=>{
              return <PlayerMeta details={data.result[p]}
                      price={data.result[p].now_cost/10}
                      pos={pos[data.result[p].element_type-1]}
                      firstname={data.result[p].first_name} 
                      secondname={data.result[p].second_name} 
                      team={data.teams[data.result[p].team - 1].short_name} 
                      photo={imgcode(data.result[p].code)}
                      p_selected={props.p_selected}/>              
      })
      } */}
    </div>
  );
      
}