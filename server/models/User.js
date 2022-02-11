const mongoose = require("mongoose");
require("dotenv").config();

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    players: {
        GKP: [Number],
        DEF: [Number],
        MID: [Number],
        FWD: [Number]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;