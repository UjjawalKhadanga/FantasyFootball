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
			
		<div className="player-meta row align-content-center" onClick={() => {props.p_selected(playerr_details)}} style={{cursor: "pointer"}}>
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
  const players=[
    {
        firstname: "Ujjawal",
        secondname: "Khadanga",
        team: "MANC",
        number: 7,
        pos: "GKP"
    },
    {
        firstname: "Dev",
        secondname: "Prajapati",
        team: "MANU",
        number: 4,
        pos: "FRW"
    }
]
  //fetching data of searched players
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
      const url = "http://localhost:8080/search";
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    }, [data]);

    
  


  //for player images
  var imgcode = (x) => {
      const img = "https://resources.premierleague.com/premierleague/photos/players/110x140/p";   
      for(var i=0; i<x.length; i++)
      {
          var s;
          if(x[i] == '.'){
              s = x.substr(0, i);
              break;
          }
      }
      var y = img.concat(s);
      return y.concat(".png");   
  };

  const pos = ["GKP", "DEF", "MID", "FWD"];

  if(typeof(data.result) == "object")
  {
    return (
        Object.keys(data.result).map((p, idx)=>{
                return <PlayerMeta details={data.result[p]}
                        price={data.result[p].now_cost/10}
                        pos={pos[data.result[p].element_type-1]}
                        firstname={data.result[p].first_name} 
                        secondname={data.result[p].second_name} 
                        team={data.teams[data.result[p].team - 1].short_name} 
                        photo={imgcode(data.result[p].photo)}
                        p_selected={props.p_selected}/>
                        
        })
    );
  }
  else
  {
    return (
        players.map((p, idx)=>{
                return <PlayerMeta number={p.now_cost} firstname={p.first_name} lastname={p.second_name} team={p.team} pos={p.photo}/>
        })
    );
  }
      
}