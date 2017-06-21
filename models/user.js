var mongoose = require('mongoose');
var ErrorHandler = require('../util/error_handler');

mongoose.Promise = global.Promise;

var User = mongoose.model('project', {
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
    return  new Promise((resolve, reject) => {
        User.find({
            _id: id
        }).then(user => {
            resolve(user);
        }, error => reject(ErrorHandler(error)));
    
    })
}

exports.post = function(object) {
    var newUser = new User(object);
    return new Promise((resolve, reject) => {
        newUser.save().then(newUser), error => reject(ErrorHandler(error));
    })
}

exports.put = function(id, object) {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate({
            _id: id
        }, {
            $set: object
        }, {
            new: true
        }). then(user => {
            resolve(user);
        }, error => reject(ErrorHandler(error)));
    })
}

