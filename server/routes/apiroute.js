const express = require("express");
const router = express.Router();

var x = {
     a:1,
     b:2,
     c:3
}


router.get('/', (req, res) => {
	res.send(x);
});

module.exports = router;