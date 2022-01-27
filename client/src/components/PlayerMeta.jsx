import React from 'react';

export default function PlayerMeta(props) {
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
