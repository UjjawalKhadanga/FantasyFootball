const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwtAuth = require("../middleware/jwtAuth");

router.get('/', jwtAuth ,async (req,res) => {
    const user = await User.findById(req.userID);
    console.log(user);
    if(!user){
        return res.send({error: "User not found"})
    }
    return res.json({
        players: user.players,
        budget: user.budget
    });
})

module.exports = router;