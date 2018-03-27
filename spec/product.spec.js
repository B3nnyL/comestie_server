var request = require("request");

var base_url = "http://localhost:3000/products";

describe('products API', function(){
  it(" GET /products, return 3 products", function(done) {
    request.get(base_url , function(error, response, body) {
      expect(body).toBe(JSON.stringify([]));
      done();
    });
  });

  it(" GET /products/5aac8a27adc61f4b8cba9e97 and return none", function(done) {
    request.get(base_url + '/5aac8a27adc61f4b8cba9e97', function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(body).toBe(JSON.stringify(null));
      done();
    });
  });

  // it(" POST /products/add, add brand with a name new", function(done) {
  //   request.post(base_url + '/add', {json: true, body: {name:"New"}}, function(error, response, body) {
  //     expect(response.statusCode).toBe(200);
  //     done();
  //   });
  // });

  it(" PUT /products/5aac8a27adc61f4b8cba9e97", function(done) {
    request.put(base_url + '/5aac8a27adc61f4b8cba9e97', {json: true, body: {name:"My product"}}, function(error, response, body) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});