var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

function Watches() {
  return knex('watches');
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  Watches().select().then(function(result){
    res.render('products', { title: 'Express', watches: result });
  });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Express' });
});



module.exports = router;
