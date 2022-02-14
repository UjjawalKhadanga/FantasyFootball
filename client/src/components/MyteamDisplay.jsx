import React from 'react';
import './stylesheets/MyteamDisplay.css'

export default function MyteamDisplay(props) {
    const imgsrc = "https://thumbs.dreamstime.com/b/soccer-field-football-stadium-vertical-background-green-grass-painted-line-sport-play-overhead-view-pitch-grou-ground-211653743.jpg";
    const pimg = "https://resources.premierleague.com/premierleague/photos/players/110x140/p17761.png";

    // var selected_class = "", p_to_swap = -1;

    // const player_onclick = (x, p_class) => {
    //     if(p_to_swap == -1){
    //         document.getElementsByClassName(p_class)[0].style.background = "yellow";
    //         selected_class = p_class;
    //         p_to_swap = x;
    //         props.swap_fn(x);
    //     }else{
    //         if(props.myteam.all[x].pos != props.myteam.all[p_to_swap].pos) {alert("Please select players from same position!");return;}
    //         document.getElementsByClassName(selected_class)[0].style.background = "none";
    //         selected_class = "";
    //         p_to_swap = -1;
    //         props.swap_fn(x);
    //     }
        
       
    // }

  return <div className='my-team-display col p-5 border border-black'>
      <div>
          My Team
      </div>
      <div className='field-area'>
          <img src={imgsrc} alt="" height={600} width={600} className='field'/>

          <div className='pl1' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl2' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl3' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl4' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl5' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl6' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl7' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl8' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl9' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl10' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl11' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>

          <div className='pl12' on>
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl13' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl14' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl15' >
          <img  alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
      </div>
      
      
  </div>;
}