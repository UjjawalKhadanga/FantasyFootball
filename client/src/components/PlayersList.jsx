import React from 'react';
import PlayerMeta from './PlayerMeta';
export default function PlayersList() {
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
      players.map((p)=>{
            return <PlayerMeta number={p.number} firstname={p.firstname} lastname={p.lastname} team={p.team} pos={p.pos}/>
      })
  );
}
