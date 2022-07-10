const express = require("express");
const router = express.Router();
const User = require("../models/User");

// request body of json form => { name, email, password }
router.post("/", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const players = {GKP: [], DEF: [], MID: [], FWD: []};
    const points = [];
    const budget = 1000;

    for(let i=0; i<38; i++) {points.push(0);}

    const user = new User({
        name,
        email,
        password,
        players,
        points,
        budget
    });
    const result= await user.save();
    res.send(result);
});

module.exports = router;