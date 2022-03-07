const express = require("express");
const router = express.Router();
const User = require("../models/User");

// request body of json form => { userId,team }
router.post('/', async (req,res) => {
    const team= req.body.team;
    const userId = req.body.userId;

    const user = await User.findById(userId);
    if(!user){
        return res.send({error: "User not found"})
    }

    const pos=['MID','GKP','FWD','DEF'];
    var cappresent = false;
    pos.forEach(p => {team[p].forEach(player => {if(player.captain) {cappresent=true; console.log(player)} })})
    if(!cappresent && team['GKP'].length > 0) {team['GKP'][0].captain = true;}
    
    var v_cappresent = false;
    pos.forEach(p => {team[p].forEach(player => {if(player.v_captain) {v_cappresent=true; console.log(player)} })})
    if(!v_cappresent && team['DEF'].length > 0) {team['DEF'][0].v_captain = true;}
    pos.forEach(p => {
        team[p].forEach(player => {
            // if player is not in the team, add it
            playerpresent=false;
            for(let i = 0; i < user.players[p].length; i++){
                if(user.players[p][i].details.code==player.details.code){
                    playerpresent=true;
                }
            }
            if(!playerpresent){
                user.players[p].push(player);
            }
        });
    });

    
    await user.save();
    return res.send({success: "Players added in user's list"})
})

router.post('/updateteam', async (req,res) => {
    const team= req.body.team;
    const userId = req.body.userId;

    const user = await User.findById(userId);
    if(!user){
        return res.send({error: "User not found"})
    }
    
    const pos=['MID','GKP','FWD','DEF'];

    pos.forEach(p => {
        user.players[p] = [];
        team[p].forEach(player => {    
            user.players[p].push(player);
        });
    });
    await user.save();
    return res.send({success: "Players updated"})
})

module.exports = router;