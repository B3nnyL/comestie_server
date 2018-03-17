var mongoose = require('mongoose');
var ErrorHandler = require('../util/error_handler');

mongoose.Promise = global.Promise;

var User = mongoose.model('user', {
    name: {
        type: String,
        require: true
    },
    createDate: {
        type: String,
        require: true
    },
    skinType: String,
    age: String
})

exports.get = function(id) {
    return  new Promise((res, rej) => {
        User.find({
            _id: id
        }).then(user => {
            res(user);
        }, error => rej(ErrorHandler(error)));
    
    })
}

exports.post = function(object) {
    var newUser = new User(object);
    return new Promise((res, rej) => {
        newUser.save().then(newUser), error => rej(ErrorHandler(error));
    })
}

exports.put = function(id, object) {
    return new Promise((res, rej) => {
        User.findOneAndUpdate({
            _id: id
        }, {
            $set: object
        }, {
            new: true
        }). then(user => {
            res(user);
        }, error => rej(ErrorHandler(error)));
    })
}

