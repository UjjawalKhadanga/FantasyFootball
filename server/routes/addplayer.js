const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");

mongoose.connect(process.env.MONGODB_URI);

// request body of json form => { userId,team }
router.post('/', async (req,res) => {
    const team= req.body.team;
    const userId = req.body.userId;

    const user = await User.findById(userId);
    if(!user){
        return res.send({error: "User not found"})
    }

    const pos=['MID','GKP','FWD','DEF'];

    pos.forEach(p => {
        team[p].forEach(player => {
            console.log(player.details.code);
            user.players[p].push(player.details.code);
        });
    });
    await user.save();
    return res.send({success: "Players added in user's list"})
})

module.exports = router;