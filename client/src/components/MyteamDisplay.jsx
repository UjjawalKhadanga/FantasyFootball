import React from 'react';
import './stylesheets/MyteamDisplay.css'

export default function MyteamDisplay() {
    const imgsrc = "https://thumbs.dreamstime.com/b/soccer-field-football-stadium-vertical-background-green-grass-painted-line-sport-play-overhead-view-pitch-grou-ground-211653743.jpg";
    const pimg = "https://resources.premierleague.com/premierleague/photos/players/110x140/p17761.png";
  return <div className='my-team-display col p-5 border border-black'>
      <div>
          My Team
      </div>
      <div className='field-area'>
          <img src={imgsrc} alt="" height={600} width={600} className='field'/>

          <div className='pl1'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl2'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl3'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl4'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl5'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl6'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl7'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl8'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl9'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl10'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl11'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>

          <div className='pl12'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl13'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl14'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl15'>
          <img src={pimg} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
      </div>
      
      
  </div>;
}
