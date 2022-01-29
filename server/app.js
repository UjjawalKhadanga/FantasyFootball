const fs = require("fs");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

//Update DB router
const updateR = require("./routes/update");
app.use("/update", updateR);

//Search Player router
const searchR = require("./routes/search");
app.use("/search", searchR);

//Client API router
const apiR = require("./routes/apiroute");
app.use("/api", apiR);

app.listen(8080, console.log("Listening"));
