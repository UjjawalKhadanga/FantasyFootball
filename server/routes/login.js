const express = require("express");
const router = express.Router();
const User = require("../models/User");

// request body of json form => { email, password }
router.post("/", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

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
    return res.send({
        success: "Login success"
    });
});

module.exports = router;