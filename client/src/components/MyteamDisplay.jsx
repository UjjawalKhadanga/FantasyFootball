import React from 'react';
import './stylesheets/MyteamDisplay.css'
import { useNavigate } from 'react-router-dom';

export default function MyteamDisplay(props) {
    const Navigate=useNavigate();
    const imgsrc = "https://thumbs.dreamstime.com/b/soccer-field-football-stadium-vertical-background-green-grass-painted-line-sport-play-overhead-view-pitch-grou-ground-211653743.jpg";
    //highlight captain
    const is_captain = () => {
        const poss = ['GKP', 'DEF', 'MID', 'FWD'];
        poss.forEach(pos => {props.teamData[pos].forEach((player, id) => {
            if(player.captain){
                document.getElementsByClassName('pl'+pos+id)[0].style.background = 'black';
            }else if(player.v_captain){
                document.getElementsByClassName('pl'+pos+id)[0].style.background = 'grey';
            }else{
                document.getElementsByClassName('pl'+pos+id)[0].style.background = 'none';
            }
        })});
    }
    
    //swap function
    let p_to_swap = {idx:-1, pos: 1, class: "", cap: false};
    let set_captain = false, set_v_captain = false;
    const player_onclick = (x, pos, p_class) => {
        //set captain
        if(set_captain){
            if(props.teamData[p_class.substring(2, 5)][parseInt(p_class.substring(5, p_class.length))].v_captain === true){
                alert(props.teamData[p_class.substring(2, 5)][parseInt(p_class.substring(5, p_class.length))].details.web_name);
                return;
            }else{
                let newData = {...props.teamData};
                const poss = ['GKP', 'DEF', 'MID', 'FWD'];
                poss.forEach(pos => {newData[pos].forEach((player, id) => {
                    newData[pos][id].captain = false;
                })});
                newData[p_class.substring(2, 5)][parseInt(p_class.substring(5, p_class.length))].captain = true;
                props.updateTeam(newData);
            }
            is_captain();
            set_captain = false;
            return;
        }else if(set_v_captain){
            if(props.teamData[p_class.substring(2, 5)][parseInt(p_class.substring(5, p_class.length))].captain === true){
                alert(props.teamData[p_class.substring(2, 5)][parseInt(p_class.substring(5, p_class.length))].details.web_name)
                return;
            }else{
                let newData = {...props.teamData};
                const poss = ['GKP', 'DEF', 'MID', 'FWD'];
                poss.forEach(pos => {newData[pos].forEach((player, id) => {
                    newData[pos][id].v_captain = false;
                })});
                newData[p_class.substring(2, 5)][parseInt(p_class.substring(5, p_class.length))].v_captain = true;
                props.updateTeam(newData);
            }
            is_captain();
            set_v_captain = false;
            return;
        }
        //select player1
        if(p_to_swap.idx === -1){
            document.getElementsByClassName(p_class)[0].style.background = "yellow";
            p_to_swap.idx = x;
						p_to_swap.class= p_class;
						p_to_swap.pos = pos;
        }
        //select player2 and swap
        else{
            if(pos !== p_to_swap.pos) {alert("Please select players from same position!");return;}
            document.getElementsByClassName(p_to_swap.class)[0].style.background = "none";
            is_captain();
						let newData = {...props.teamData};
						if(pos === 1){
							let temp_p = newData.GKP[x];
							newData.GKP[x] = newData.GKP[p_to_swap.idx];
							newData.GKP[p_to_swap.idx] = temp_p;
						}else if(pos === 2){
							let temp_p = newData.DEF[x];
							newData.DEF[x] = newData.DEF[p_to_swap.idx];
							newData.DEF[p_to_swap.idx] = temp_p;
						}else if(pos === 3){
							let temp_p = newData.MID[x];
							newData.MID[x] = newData.MID[p_to_swap.idx];
							newData.MID[p_to_swap.idx] = temp_p;
						}else if(pos === 4){
							let temp_p = newData.FWD[x];
							newData.FWD[x] = newData.FWD[p_to_swap.idx];
							newData.FWD[p_to_swap.idx] = temp_p;
						}
            
						props.updateTeam(newData);
            p_to_swap.idx = -1;
        }    
    }
    

	//when empty array is recieved when loading page
    // gkp = 2;
    // def = 5;
    // mid = 6;
    // fwd = 2;
	if(props.teamData.GKP.length < 2 || props.teamData.DEF.length < 5 || 
        props.teamData.MID.length < 6 || props.teamData.FWD.length < 2){
		console.log("MTD")
		return (
            <div className='d-flex flex-column'>
                <div className='display-6 text-center mt-5'>Complete your team in Select Your Team Window</div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-dark" onClick={()=>{Navigate('../selectyourteam')}}>Go</button>
                </div>
            </div>
		)
	}

  return(
    <div className='container'>
        <div className='display-6 text-center'>
            My Team
        </div>
        <hr className='my-4'/>
        <div className='field-area'  onLoad={is_captain}>
            <img src={imgsrc} alt="" height={600} width={600} className='field' />

            <div className='plFWD0' onClick={() => {player_onclick(0, 4, 'plFWD0')}}>
            <img src={props.teamData.FWD[0].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.FWD[0].details.web_name}</p>
            </div>
            <div className='plMID4' onClick={() => {player_onclick(4, 3, 'plMID4')}}>
            <img src={props.teamData.MID[4].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.MID[4].details.web_name}</p>
            </div>
            <div className='plMID3' onClick={() => {player_onclick(3, 3, 'plMID3')}}>
            <img src={props.teamData.MID[3].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.MID[3].details.web_name}</p>
            </div>
            <div className='plMID2' onClick={() => {player_onclick(2, 3, 'plMID2')}}>
            <img src={props.teamData.MID[2].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.MID[2].details.web_name}</p>
            </div>
            <div className='plMID1' onClick={() => {player_onclick(1, 3, 'plMID1')}}>
            <img src={props.teamData.MID[1].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.MID[1].details.web_name}</p>
            </div>
            <div className='plMID0' onClick={() => {player_onclick(0, 3, 'plMID0')}}>
            <img src={props.teamData.MID[0].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.MID[0].details.web_name}</p>
            </div>
            <div className='plDEF3' onClick={() => {player_onclick(3, 2, 'plDEF3')}}>
            <img src={props.teamData.DEF[3].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.DEF[3].details.web_name}</p>
            </div>
            <div className='plDEF2' onClick={() => {player_onclick(2, 2, 'plDEF2')}}>
            <img src={props.teamData.DEF[2].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.DEF[2].details.web_name}</p>
            </div>
            <div className='plDEF1' onClick={() => {player_onclick(1, 2, 'plDEF1')}}>
            <img src={props.teamData.DEF[1].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.DEF[1].details.web_name}</p>
            </div>
            <div className='plDEF0' onClick={() => {player_onclick(0, 2, 'plDEF0')}}>
            <img src={props.teamData.DEF[0].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.DEF[0].details.web_name}</p>
            </div>
            <div className='plGKP0' onClick={() => {player_onclick(0, 1, 'plGKP0')}}>
            <img src={props.teamData.GKP[0].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.GKP[0].details.web_name}</p>
            </div>
            <div className='plFWD1' onClick={() => {player_onclick(1, 4, 'plFWD1')}}>
            <img src={props.teamData.FWD[1].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.FWD[1].details.web_name}</p>
            </div>
            <div className='plMID5' onClick={() => {player_onclick(5, 3, 'plMID5')}}>
            <img src={props.teamData.MID[5].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.MID[5].details.web_name}</p>
            </div>
            <div className='plDEF4' onClick={() => {player_onclick(4, 2, 'plDEF4')}}>
            <img src={props.teamData.DEF[4].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.DEF[4].details.web_name}</p>
            </div>
            <div className='plGKP1' onClick={() => {player_onclick(1, 1, 'plGKP1')}}>
            <img src={props.teamData.GKP[1].photo} alt="" height={70} width={60}/>
            <p className='bg-info text-center'>{props.teamData.GKP[1].details.web_name}</p>
            </div>
                        {/* <h6 className='cap'>C</h6> */}
            <button className='c_btn btn btn-dark' onClick={() => {set_captain=true;}}>Select Captian</button>
            <button className='vc_btn btn btn-secondary' onClick={() => {set_v_captain=true;}}>Select Vice-Captian</button>
        </div>
    </div>
  )

}

