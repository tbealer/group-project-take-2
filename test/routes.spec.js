var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');

var should = chai.should();

chai.use(chaiHttp)

describe('testing API routes', function(){

  it('should get the index page', function(done){
    chai.request(server)
    .get('/')
    .end(function(err, res){
      console.log(res.text)
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.have.string('<div class="row" id="slides">');
      res.text.should.contain('<div class="container-fluid">');
      done();
    })
  });
});