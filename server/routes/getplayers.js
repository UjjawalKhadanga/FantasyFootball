const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwtAuth = require("../middleware/jwtAuth");

router.get('/', jwtAuth ,async (req,res) => {
    const user = await User.findById(req.userID);
    if(!user){
        return res.send({error: "User not found"})
    }

    return res.send(user.players);
})

module.exports = router;