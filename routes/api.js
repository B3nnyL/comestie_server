var Product = require('../models/product');
var User = require('../models/user');
var Brand = require('../models/brand');
var Category = require('../models/category');

module.exports = function (app) {
   
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

    //test

    app.get('/brands', function(req,res){
        Brand.list()
        .then(brands => res.json(brands), error => res.status(400).send(error))
    });
   
    app.post('/brands/add', function (req,res) {
        Brand.add(req.body)
        .then(brand => res.json(brand), error => res.status(400).send(error))
    });

    app.get('/brands/:id', function(req, res){
        Brand.get(req.params.id)
        .then(brand => res.json(brand), error => res.status(400).send(error))
    });

    app.put('/brands/:id', function(req, res){
        Brand.update(req.params.id, req.body)
        .then(brand => res.json(brand), error => res.status(400).send(error))
    });

    app.delete('/brands/:id', function(req, res){
        Brand.delete(req.params.id)
        .then(brand => res.json(brand), error => res.status(400).send(error))
    });

    app.get('/categories', function(req, res) {
        Category.list()
        .then(category => res.json(category), error => res.status(400).send(error))
    });

    app.get('/categories/:id', function(req, res){
        Category.get(req.params.id)
        .then(category => res.json(category), error => res.status(400).send(error))
    });

    app.post('/categories/add', function(req, res) {
        Category.add(req.body)
        .then(category => res.json(category), error => res.status(400).send(error))
    });

    app.put('/categories/:id', function(req, res){
        Category.update(req.params.id, req.body)
        .then(category => res.json(category), error => res.status(400).send(error))
    });

    app.delete('/categories/:id', function(req, res){
        Category.delete(req.params.id)
        .then(category => res.json(category), error => res.status(400).send(error))
    });

    app.get('/products', function(req, res) {
        Product.list()
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.get('/products/:id', function(req, res){
        Product.get(req.params.id)
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.get('/products/add', function(req, res) {
        Product.add(req.body)
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.put('/products/:id', function(req, res){
        Product.update(req.params.id, req.body)
        .then(product => res.json(product), error => res.status(400).send(error))
    });

    app.delete('/products/:id', function(req, res){
        Product.delete(req.params.id)
        .then(product => res.json(product), error => res.status(400).send(error))
    });

}
