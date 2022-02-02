import React from 'react';

export default function MyTeamList() {
  return <div className='my-team-list border border-dark col-3'>
    <div className='text-center'>
      <div className='row h5' style={{background:"#9932CC"}}>Goalkeepers</div>
      <div className='row h5' style={{background:"DeepPink"}}>Defenders</div>
      <div className='row h5' style={{background:"yellow"}}>Midfielders</div>
      <div className='row h5' style={{background:"#FF8C00"}}>Forwards</div>
    </div>
  </div>;
}
