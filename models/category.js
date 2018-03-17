var monogoose = require('mongoose');
var errorHandler = require('../util/error_handler');

monogoose.Promise = global.Promise;

var Category = monogoose.model('category',{
  name: {
    type: String,
    require: true
  }
})

exports.list = function(){
  return new Promise((res, rej) => {
    Category.find()})
    .then(Categories => {res(Category);}, error => {rej(errorHandler(error));})
  }

exports.post = function(object){
  var newCategory = new Category(object);
  return new Promise((res, rej) => {
    Category.save().then(newCategory), error => {rej(errorHandler(error));}})
}

exports.get = function(id){
  return new Promise((res, rej) => {
    Category.findById(id)
    .then(Category => {res(Category), error => {rej(errorHandler(error));}})
  })
}

exports.update = function(id, object){
  return new Promise((res, rej) => {
    Category.findByIdAndUpdate(id, object).then(updatedCategory), error => {rej(errorHandler(error));}
  })
}

exports.delete = function(id){
  return new Promise((res, rej) => {
    Category.findByIdAndRemove(id).then(console.log("Deleted!" + category), error => {rej(errorHandler(error));})
  })
}