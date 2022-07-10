const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwtAuth = require("../middleware/jwtAuth");

router.get('/', jwtAuth ,async (req,res) => {
    const user = await User.find();
    console.log(user);
    if(!user){
        return res.send({error: "User not found"})
    }
    console.log("Userdata");
    return res.send(user);
})

module.exports = router;