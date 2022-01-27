import React from 'react';
import PlayerMeta from './PlayerMeta';
import PlayersList from './PlayersList';

export default function PlayerFormDisplay() {


  return (
      <div className="player-form-display m-3 border border-2 border-dark p-0 col-3 ">
            <h5 className='m-3 text-center'>Search Results</h5>
            <ul className="list-group">
                <PlayersList />
            </ul>
      </div>
  );
}
