const https = require("https");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const express = require("express");
const app = express();
require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);


app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req, res) => {
  res.render('index');
});

//Update DB router
const updateR = require("./routes/update");
app.use("/update", updateR);

//Search Player router
const searchR = require("./routes/search");
app.use("/search", searchR);

//Add Player router
const addplayerR = require("./routes/addplayer");
app.use("/addplayer", addplayerR);

//Get Player router
const getplayerR = require("./routes/getplayers");
app.use("/getplayers", getplayerR);

//Login router
const loginR = require("./routes/login");
app.use("/login", loginR);

// Register router
const registerR = require("./routes/register");
app.use("/register", registerR);

// Logout router
const logoutR = require("./routes/logout");
app.use("/logout", logoutR)

app.listen(8080, console.log("Listening"));
