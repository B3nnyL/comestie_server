var request = require("request");

var base_url = "http://localhost:3000/categories";

describe('categories API', function(){
  it(" GET /categories, return 3 categories", function(done) {
    request.get(base_url , function(error, response, body) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it(" GET /categories/5aac8a27adc61f4b8cba9e97, return Aesop", function(done) {
    request.get(base_url + '/5aac8a27adc61f4b8cba9e97', function(error, response, body) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  // it(" POST /categories/add, add brand with a name new", function(done) {
  //   request.post(base_url + '/add', {json: true, body: {name:"New"}}, function(error, response, body) {
  //     expect(response.statusCode).toBe(200);
  //     done();
  //   });
  // });

  it(" PUT /categories/5aac8a27adc61f4b8cba9e97", function(done) {
    request.put(base_url + '/5aac8a27adc61f4b8cba9e97', {json: true, body: {name:"Handcream"}}, function(error, response, body) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});