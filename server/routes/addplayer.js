const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");

mongoose.connect(process.env.MONGODB_URI);

// request body of json form => { playerId: 1, userId: 1}
router.post('/', async (req,res) => {
    const playerId = req.body.playerId;
    const userId = req.body.userId;

    // query the request
    const user = await User.findById(userId);
    if(!user){
        return res.send({
            error: "User not found"
        })
    }
    if(user.players.includes(playerId)){
        return res.send({
            error: "Player already in user"
        })
    }
    user.players.push(playerId);
    await user.save();
    return res.send({
        success: "Player added in user's list"
    })
})

module.exports = router;