var request = require("request");

var base_url = "http://localhost:3000";



describe('GET /', function(){
  it("returns status code 200", function(done) {
    request.get(base_url, function(error, response, body) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it("returns status code 200", function(done) {
    request.get(base_url + '/233', function(error, response, body) {
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  it("returns Hello", function(done) {
    request.get(base_url, function(error, response, body) {
      expect(body).toBe("Hello");
      done();
    });
  });
});

