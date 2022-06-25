const express = require("express");
const jwtAuth = require("../middleware/jwtAuth");
const router = express.Router();

router.post('/',jwtAuth,(req,res)=>{
    if(req.userID){
        res.cookie('jwt','',{maxAge: 1})
        res.json({'success':"Successfully logged out"})
    }
    return res.json({'error':"User not logged in"})
})

module.exports = router