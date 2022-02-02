import React from 'react';
import SelectionForm from './SelectionForm';
import PlayerSearchResultsDisplay from './PlayerSearchResultsDisplay';


export default function PlayerSelector(props) {
  return (
      <div className='col-3'>
      <SelectionForm/>
      <PlayerSearchResultsDisplay p_selected={props.p_selected}/>
      </div>
  );
}
