var express = require('express');
var router = express.Router();
const product =1;
const factor =1;
/* GET users listing. */
router.get('/', function(req, res, next) {
  factor++;
  product = product*factor;
  res.send(`product is ${product}`);
});

module.exports = router;
