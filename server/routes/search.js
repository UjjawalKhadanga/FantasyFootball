const express = require("express");
const router = express.Router();
const fs = require("fs");

var data;

fs.readFile("C:/Users/Dev Prajapat/Documents/Dev projects/Fantasy_league/serv/db/gamedata.txt", 'utf8', (err, Data) => {
  if(err) throw err;
  else data = JSON.parse(Data);
});


var teamcodes = 
  ['Arsenal','Aston Villa','Brentford','Brighton','Burnley', 'Chelsea','Crystal Palace', 'Everton','Leicester',  'Leeds',
   'Liverpool', 'Man City','Man Utd',  'Newcastle','Norwich', 'Southampton','Spurs',  'Watford','West Ham',  'Wolves'
	];

router.post('/', (req, res) => {
	console.log(req.body.pname);
	var results = [];

	for(var i=0; i<data.elements.length; i++)
	{
		if(data.elements[i].first_name.toLowerCase() == req.body.pname.toLowerCase() ||
		data.elements[i].second_name.toLowerCase() == req.body.pname.toLowerCase() ||
		data.elements[i].web_name.toLowerCase() == req.body.pname.toLowerCase())
		{
			results.push(data.elements[i]);
		}
	}

	send_data = {
		input: req.body.pname,
		result: results,
		teams: teamcodes
	}

	res.render("player", send_data);
});

module.exports = router;