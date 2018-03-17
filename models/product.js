var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ErrorHandler = require('../util/error_handler');

mongoose.Promise = global.Promise;

var Product = mongoose.model('products', {
    name: {
        type: String,
        required: true
    },
    brand: [{type: Schema.Types.ObjectId, ref: 'brand'}],
    category: [{type: Schema.Types.ObjectId, ref: 'category'}],
    openJarDate: {
        type: Date,
        required: false
    },
    dueDate: {
        type: Date, 
        required: false
    },
    period: {
        type: Date,
        required: false
    }
})

exports.list = function() {
    return new Promise((res, rej) => {
        Product.find()
    }).then(product => {
        res(product);
    }, error => rej(ErrorHandler(error)));   
}

exports.get = function(id) {
    return new Promise((res, rej) => {
        Product.findOne(id)
    }).then(product => {
        res(product);
    }, error => rej(ErrorHandler(error)));   
}

exports.post = function(object) {
    var newProduct = new Product(object);
    return new Promise((res, rej) => {
        newProduct.save().then(newProduct), error => rej(ErrorHandler(error));
    })
}

exports.put = function(id, object) {
    return new Promise((res, rej) => {
        Product.findOneAndUpdate({
            _id: id
        }, {
            $set: object
        }, {
            new: true
        }). then(product => {
            res(product);
        }, error => rej(ErrorHandler(error)));
    })
}

exports.delete = function(id) {
    return Product.findByIdAndRemove({
        _id: id
    });
}