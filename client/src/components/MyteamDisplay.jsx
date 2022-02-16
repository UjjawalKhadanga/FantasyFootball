import React from 'react';
import './stylesheets/MyteamDisplay.css'

export default function MyteamDisplay(props) {
    const imgsrc = "https://thumbs.dreamstime.com/b/soccer-field-football-stadium-vertical-background-green-grass-painted-line-sport-play-overhead-view-pitch-grou-ground-211653743.jpg";
    const pimg = "https://resources.premierleague.com/premierleague/photos/players/110x140/p17761.png";


    var selected_class = "", p_to_swap = -1;

    const player_onclick = (x, p_class) => {
        if(p_to_swap == -1){
            document.getElementsByClassName(p_class)[0].style.background = "yellow";
            selected_class = p_class;
            p_to_swap = x;
            props.swap_fn(x);
        }else{
            if(props.myteam.all[x].pos != props.myteam.all[p_to_swap].pos) {alert("Please select players from same position!");return;}
            document.getElementsByClassName(selected_class)[0].style.background = "none";
            selected_class = "";
            p_to_swap = -1;
            props.swap_fn(x);
        }
        
       
    }


  return <div className='my-team-display col p-5 border border-black'>
      <div>
          My Team
      </div>
      <div className='field-area'>
          <img src={imgsrc} alt="" height={600} width={600} className='field'/>


          <div className='pl1' onClick={() => {player_onclick(13, 'pl1')}}>
          <img src={props.myteam.all[13].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl2' onClick={() => {player_onclick(11, 'pl2')}}>
          <img src={props.myteam.all[11].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl3' onClick={() => {player_onclick(10, 'pl3')}}>
          <img src={props.myteam.all[10].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl4' onClick={() => {player_onclick(9, 'pl4')}}>
          <img src={props.myteam.all[9].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl5' onClick={() => {player_onclick(8, 'pl5')}}>
          <img src={props.myteam.all[8].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl6' onClick={() => {player_onclick(7, 'pl6')}}>
          <img src={props.myteam.all[7].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl7' onClick={() => {player_onclick(5, 'pl7')}}>
          <img src={props.myteam.all[5].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl8' onClick={() => {player_onclick(4, 'pl8')}}>
          <img src={props.myteam.all[4].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl9' onClick={() => {player_onclick(3, 'pl9')}}>
          <img src={props.myteam.all[3].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl10' onClick={() => {player_onclick(2, 'pl10')}}>
          <img src={props.myteam.all[2].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl11' onClick={() => {player_onclick(0, 'pl11')}}>
          <img src={props.myteam.all[0].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>

          <div className='pl12' onClick={() => {player_onclick(14, 'pl12')}}>
          <img src={props.myteam.all[14].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl13' onClick={() => {player_onclick(12, 'pl13')}}>
          <img src={props.myteam.all[12].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl14' onClick={() => {player_onclick(6, 'pl14')}}>
          <img src={props.myteam.all[6].photo} alt="" height={70} width={60}/>
          <p className='bg-info text-center'>0</p>
          </div>
          <div className='pl15' onClick={() => {player_onclick(1, 'pl15')}}>
          <img src={props.myteam.all[1].photo} alt="" height={70} width={60}/>

          <p className='bg-info text-center'>0</p>
          </div>
      </div>
      
      
  </div>;

}

