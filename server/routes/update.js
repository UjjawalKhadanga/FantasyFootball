const express = require("express");
const router = express.Router();
const fs = require("fs");
const request = require("request");

var url = "https://fantasy.premierleague.com/api/bootstrap-static/";

var data;

router.get("/", (req, res) => {
    request(url, (err, res, body) => {
        if (err) {
        console.log(err);
        }else{
        data = JSON.parse(body);
        fs.writeFile("./db/gamedata.txt", JSON.stringify(data), (err) => {
            if(err) throw err;
        });
        }
    });

    url = "https://fantasy.premierleague.com/api/fixtures/";
    request(url, (err, res, body) => {
        if (err) {
        console.log(err);
        }else{
        data = JSON.parse(body);
        fs.writeFile("./db/fixtures.txt", JSON.stringify(data), (err) => {
            if(err) throw err;
        });
        }
    });

    

    
    res.send("Updated Database");
});

module.exports = router;