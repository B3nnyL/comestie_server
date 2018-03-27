var monogoose = require('mongoose');
var errorHandler = require('../util/error_handler');

monogoose.Promise = global.Promise;

var Category = monogoose.model('categories',{
  name: {
    type: String,
    required: true
  }
})

exports.list = function() {
  return new Promise((res, rej) => {
    Category.find({})
    .then(category => res(category), error => rej(error))
  });
}

exports.get = function(id) {
  return new Promise((res, rej) => {
    Category.findById(id)
    .then(category => res(category), error => rej(error))
  });
}

exports.add = function(object) {
  var newCategory = new Category(object)
  return new Promise((res, rej) => {
    newCategory.save()
    .then(category => res(category), error => rej(error))
  });
}

exports.update = function(id, object) {
  return new Promise((res, rej) => {
      Category.findByIdAndUpdate(id, object)
      .then(category => res(category), error => rej(error))
  });
}

exports.delete = function(id) {
  return new Promise((res, rej) => {
      Category.findByIdAndRemove(id)
      .then(category => res(category), error => rej(error))
  })
}

