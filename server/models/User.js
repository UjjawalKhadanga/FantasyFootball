const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    players: {
        GKP: [Object],
        DEF: [Object],
        MID: [Object],
        FWD: [Object]
    },
    points: {},
    budget: Number
});

userSchema.pre('save' , async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, parseInt(process.env.SALT_ROUNDS));
    }
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;