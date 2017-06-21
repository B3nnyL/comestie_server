var Product = require('../models/product');

module.exports = function(app) {
    app.get('/products', function(req, res) {
        Product.get()
        .then(products =>  res.json(products), error => res.status(400).send(error))
    });

    app.post('/product', function(req, res) {
        Product.post(req.body)
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.put('/product/:id', function(req, res) {
        Product.put(req.body(id), req.body)
        .then(product => res.json(product), error => res.status(400).send(error))
    });

  
    
}