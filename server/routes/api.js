const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwtAuth = require("../middleware/jwtAuth");
const fetch = require("node-fetch");

router.get('/bootstrap-static/',async (req,res) => {
    const response = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/')
    const data = await response.json();
    res.json(data)
})

router.get('/event/:gameweekId/live/',async (req,res) => {
    const response = await fetch(`https://fantasy.premierleague.com/api/event/${req.params.gameweekId}/live/`)
    console.log(response)
    const data = await response.json();
    res.json(data)
})

module.exports = router;