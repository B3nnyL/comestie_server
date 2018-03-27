var request = require("request");

var base_url = "http://localhost:3000/brands";

describe('Brands API', function(){
  it(" GET /brands, return 3 brands", function(done) {
    request.get(base_url , function(error, response, body) {
      expect(body).toBe(JSON.stringify([{"_id":"5aac806d2a593248490c230b","name":"Aesop","__v":0},{"_id":"5aac828cc13dfc490104bbe4","name":"Chanel","__v":0},{"_id":"5aac829ac13dfc490104bbe5","name":"Body Shop","__v":0}]));
      done();
    });
  });

  it(" GET /brands/5aac806d2a593248490c230b, return Aesop", function(done) {
    request.get(base_url + '/5aac806d2a593248490c230b', function(error, response, body) {
      expect(body).toBe(JSON.stringify({"_id":"5aac806d2a593248490c230b","name":"Aesop","__v":0}));
      done();
    });
  });

  // it(" POST /brands/add, add brand with a name new", function(done) {
  //   request.post(base_url + '/add', {json: true, body: {name:"New"}}, function(error, response, body) {
  //     expect(response.statusCode).toBe(200);
  //     done();
  //   });
  // });

  it(" PUT /brands/5aac806d2a593248490c230b, update Aesop to Lush", function(done) {
    request.put(base_url + '/5aac806d2a593248490c230b', {json: true, body: {name:"Aesop"}}, function(error, response, body) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});