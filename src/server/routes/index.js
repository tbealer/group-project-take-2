var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Express' });
});


router.post('/checkout', function(req, res, next) {
  var email= req.body.email;
  res.render('checkout', { title: 'Express' });
});


module.exports = router;
