var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/digiflier', function(req, res, next){
	res.send('<h4>1. Haus Coffee</h4> - 24th St & Folsom<br/> <h4>2. Sugarlump</h4> - 24th St & Bryant');
});
module.exports = router;
