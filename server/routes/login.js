const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
    if (!   bcrypt.compare(password, user.password)) {
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


module.exports = router;