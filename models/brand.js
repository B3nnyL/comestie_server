var mongoose = require('mongoose');
var ErrorHandler = require('../util/error_handler');

mongoose.Promise = global.Promise;

var Brand = mongoose.model('brands', {
    name: {
        type: String,
        require: true
    }
})

exports.list = function() {
    return new Promise((res, rej) => {
        Brand.find()
    }).then(Brand => {
        res(Brand);
    }, error => rej(ErrorHandler(error)));   
}

exports.get = function(id) {
    return new Promise((res, rej) => {
        Brand.findOne(id)
    }).then(Brand => {
        res(Brand);
    }, error => rej(ErrorHandler(error)));   
}

exports.post = function(object) {
    var newBrand = new Brand(object);
    return new Promise((res, rej) => {
        newBrand.save().then(newBrand), error => rej(ErrorHandler(error));
    })
}

exports.put = function(id, object) {
    return new Promise((res, rej) => {
        Brand.findOneAndUpdate({
            _id: id
        }, {
            $set: object
        }, {
            new: true
        }). then(Brand => {
            res(Brand);
        }, error => rej(ErrorHandler(error)));
    })
}

exports.delete = function(id) {
    return Brand.findByIdAndRemove({
        _id: id
    });
}