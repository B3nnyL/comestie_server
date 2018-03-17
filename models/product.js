var mongoose = require('mongoose');
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
    return new Promise((resolve, reject) => {
        Product.find()
    }).then(product => {
        resolve(product);
    }, error => reject(ErrorHandler(error)));   
}

exports.get = function(id) {
    return new Promise((resolve, reject) => {
        Product.findOne(id)
    }).then(product => {
        resolve(product);
    }, error => reject(ErrorHandler(error)));   
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