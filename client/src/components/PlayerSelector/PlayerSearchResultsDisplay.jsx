import React from 'react';

function PlayerMeta(props) {
  return (
    <li className="list-group-item">
        <div className="player-meta d-flex">
            <div className="player-number col-1">{props.number}</div>
            <div className="name d-flex col-4">
                <div className="first-name">{props.firstname}</div>
                <div className="last-name">{props.secondname}</div>
            </div>
            <div className="role col-2 ms-auto d-flex flex-column">
                <div className="player-position">
                    {props.team}
                </div>
                <div className="player-team">
                    {props.pos}
                </div>
            </div>
        </div>
    </li>
  );
}



export default function PlayerSearchResultsDisplay() {
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
  return (
      <div className="player-form-display m-3 border border-2 border-dark p-0 col-3 ">
            <h5 className='m-3 text-center'>Search Results</h5>
            <ul className="list-group">
                {
                  players.map((p) => {
                    return <PlayerMeta 
                    number={p.number} 
                    firstname={p.firstname} 
                    lastname={p.lastname} 
                    team={p.team} 
                    pos={p.pos} />
                  })
                }
            </ul>
      </div>
  );
}