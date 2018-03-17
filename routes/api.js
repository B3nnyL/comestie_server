var Product = require('../models/product');
var User = require('../models/user');
var Brand = require('../models/brand');

module.exports = function (app) {
    app.get('/', function (req,res) {
        console.log('lo')
    });

    app.get('/products', function (req, res) {
        Product.list()
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.get('/products/:id', function (req, res) {
        Product.get(req.param('id'))
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.post('/product', function (req, res) {
        Product.post(req.body)
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.put('/product/:id', function (req, res) {
        Product.put(req.param('id'), req.body)
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.delete('/product/:id', function (req, res) {
        Product.delete(req.param('id'), req.body)
        .then(() => res.send(), error => res.status(400).send(error))
    });

    app.get('/brands'), function (req, res) {
        Brand.list()
        .then(brands => res.json(brands), error => res.status(400).send(error))
    }

    app.get('/brand/:id'), function (req, res) {
        Brand.get(req.param('id'))
        .then(brands => res.json(brands), error => res.status(400).send(error))
    }

    app.post('/brand'), function (req, res) {
        Brand.post(req.body)
        .then(brand => res.json(brand), error => res.status(400).send(error))
    }

    app.put('/brand/:id'), function (req, res) {
        Brand.post(req.param('id'), req.body)
        .then(product => res.json(product), error => res.status(400).send(error))
    }

    app.delete('brand/:id'), function (req, res) {
        Brand.delete(req.param('id'))
        .then(() => res.send(), error => res.status(400).send(error))
    }


    app.get('/user/:id', function(req, res) {
        User.get(req.param('id')
        .then(user => res.json(user), error => res.status(400).send(error)))
    });

    app.post('/user', function (req, res){
        User.post(req.body)
        .then(user => res.json(user), error => res.status(400).send(error))
    });

    app.put('/user/:id', function (req, res){
        User.put(req.param('id', req.body)
        .then(user => user.json(user), error => res.status(400).send(error)))
    });
}