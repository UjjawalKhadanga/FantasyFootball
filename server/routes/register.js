const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");

// request body of json form => { name, email, password }
router.post("/", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const players = {GKP: [], DEF: [], MID: [], FWD: []};

    const user = new User({
        name,
        email,
        password,
        players
    });
    const result= await user.save();
    res.send(result);
});

module.exports = router;