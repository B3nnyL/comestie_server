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
  return new Promise((resolve, reject) => {
    Category.find()})
    .then(Categories => {resolve(Category);}, error => {reject(errorHandler(error));})
  }

exports.post = function(object){
  var newCategory = new Category(object);
  return new Promise((resolve, reject) => {
    Category.save().then(newCategory), error => {reject(errorHandler(error));}})
}

exports.get = function(id){
  return new Promise((resolve, reject) => {
    Category.findById(id)
    .then(Category => {resolve(Category), error => {reject(errorHandler(error));}})
  })
}

exports.update = function(id, object){
  return new Promise((resolve, reject) => {
    Category.findByIdAndUpdate(id, object).then(updatedCategory), error => {reject(errorHandler(error));}
  })
}

exports.delete = function(id){
  return new Promise((resolve, reject) => {
    Category.findByIdAndRemove(id).then(console.log("Deleted!" + category), error => {reject(errorHandler(error));})
  })
}