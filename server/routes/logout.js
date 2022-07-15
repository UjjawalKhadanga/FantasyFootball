const express = require("express");
const jwtAuth = require("../middleware/jwtAuth");
const router = express.Router();

router.post('/',(req,res)=>{
    res.cookie('jwt','',{maxAge: 1})
    res.json({'success':"Successfully logged out"})
    console.log('jwt set');
})

module.exports = router