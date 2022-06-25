const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtAuth = require("../middleware/jwtAuth");
const User = require("../models/User");

// request body of json form => { email, password }
router.post("/", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body)
    // query the request
    const user = await User.findOne({ email });
    if (!user) {
        return res.send({
            error: "User not found"
        });
    }
    if (user.password !== password) {
        return res.send({
            error: "Wrong password"
        });
    }
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    console.log(token);
    res.cookie('jwt',token,{
        httpOnly: true,
        withCredentials : true,
        maxAge: 1000 * 60 * 60
    })
    return res.status(200).send({
        success: "Login success"
    });
});


router.post("/check", jwtAuth,async(req,res)=>{
    const token=req.cookies.jwt
    if(!token){
        return res.status(401).json({error: "Cookie Not Set"})
    }
    const verify = jwt.verify(token,process.env.JWT_SECRET);
    if(!verify){
        return res.status(400).json({error: "Invalid Cookie"})
    }
    return res.status(200).json({success: "Valid Cookie"})
})
module.exports = router;