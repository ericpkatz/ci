var assert = require('assert');
var request = require('supertest-as-promised');
var app = require('../../../app');

describe('/products', function(){
  describe('/get', function(){
    describe('with no products', function(){
      it('returns an empty array', function(){
        return request(app).get('/api/products')
          .expect(200)
          .then(function(res){
            assert(res.body.length == 1);
          });
      });
    });
  });
});
