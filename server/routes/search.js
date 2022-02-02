const express = require("express");
const router = express.Router();
const fs = require("fs");

var data;

fs.readFile("./db/gamedata.txt", 'utf8', (err, Data) => {
  if(err) throw err;
  else data = JSON.parse(Data);
});


var teamcodes = 
  ['Arsenal','Aston Villa','Brentford','Brighton','Burnley', 'Chelsea','Crystal Palace', 'Everton','Leicester',  'Leeds',
   'Liverpool', 'Man City','Man Utd',  'Newcastle','Norwich', 'Southampton','Spurs',  'Watford','West Ham',  'Wolves'
	];

router.get('/', (req, res) => {

	console.log(req.body);
	var results = [];

	for(var i=0; i<data.elements.length; i++)
	{
		if(data.elements[i].first_name.toLowerCase() == "james".toLowerCase() ||
		data.elements[i].second_name.toLowerCase() == "james".toLowerCase() ||
		data.elements[i].web_name.toLowerCase() == "james".toLowerCase())
		{
			results.push(data.elements[i]);
		}
	}

	send_data = {
		input: "james",
		result: results,
		teams: teamcodes
	}

	res.send(send_data);
});

// request body of json form => { minCost: 2, maxCost: 5, position: 'GKP', name: 'Ujjawal'}
router.post('/', (req,res) => {
	const minCost=req.body.minCost;
	const maxCost=req.body.maxCost;
	const playerPos=req.body.playerPos;
	const playerName=req.body.playerName;

	const positions = ["GKP", "DEF", "MID", "FWD"];
	let results=[];
	// filtering database
	for(let i=0;i<data.elements.length;i++){
		if(
			(data.elements[i].first_name.toLowerCase() == playerName.toLowerCase() ||
			data.elements[i].second_name.toLowerCase() == playerName.toLowerCase() ||
			data.elements[i].web_name.toLowerCase() == playerName.toLowerCase()) &&
			positions[data.elements[i].element_type-1]==playerPos &&
			data.elements[i].now_cost >= minCost &&
			data.elements[i].now_cost <= maxCost
		){
			results.push(data.elements[i]);
		}
	}

	// sending the results in response
	console.log(results)
	return res.send({
		input: {
			minCost,
			maxCost,
			playerPos,
			playerName
		},
		result: results,
		teams: teamcodes
	})
})

module.exports = router;