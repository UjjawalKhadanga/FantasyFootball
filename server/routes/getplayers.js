const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get('/:userId', async (req,res) => {
    const user = await User.findById(req.params.userId);
    if(!user){
        return res.send({error: "User not found"})
    }

    return res.send(user.players);
})

module.exports = router;