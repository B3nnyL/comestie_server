var mongoose = require('mongoose');
var ErrorHandler = require('../util/error_handler');

mongoose.Promise = global.Promise;

var Product = mongoose.model('product', {
    name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    type: String,
    purchaseDate: {
        type: String,
        require: true
    },
    openJarDate: String,
    LastingPeriod: String
})

exports.get = function () {
    return Product.find();
}

exports.post = function(object) {
    var newProduct = new Product(object);
    return new Promise((resolve, reject) => {
        newProduct.save().then(newProduct), error => reject(ErrorHandler(error));
    })
}

exports.put = function(id, object) {
    return new Promise((resolve, reject) => {
        Product.findOneAndUpdate({
            _id: id
        }, {
            $set: object
        }, {
            new: true
        }). then(product => {
            resolve(product);
        }, error => reject(ErrorHandler(error)));
    })
}

exports.delete = function(id) {
    return Product.findByIdAndRemove({
        _id: id
    });
}