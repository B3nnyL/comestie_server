var mongoose = require('mongoose');
var ErrorHandler = require('../util/error_handler');

mongoose.Promise = global.Promise;

var Brand = mongoose.model('Brand', {
    name: {
        type: String,
        require: true
    }
})

exports.get = function() {
    return new Promise((resolve, reject) => {
        Brand.find()
    }).then(Brand => {
        resolve(Brand);
    }, error => reject(ErrorHandler(error)));   
}

exports.post = function(object) {
    var newBrand = new Brand(object);
    return new Promise((resolve, reject) => {
        newBrand.save().then(newBrand), error => reject(ErrorHandler(error));
    })
}

exports.put = function(id, object) {
    return new Promise((resolve, reject) => {
        Brand.findOneAndUpdate({
            _id: id
        }, {
            $set: object
        }, {
            new: true
        }). then(Brand => {
            resolve(Brand);
        }, error => reject(ErrorHandler(error)));
    })
}

exports.delete = function(id) {
    return Brand.findByIdAndRemove({
        _id: id
    });
}