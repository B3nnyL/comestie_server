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
    product: [{type: Schema.Types.ObjectId, ref: 'product'}],
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
      Product.find({})
      .then(Product => res(Product), error => rej(error))
    });
  }
  
  exports.get = function(id) {
    return new Promise((res, rej) => {
      Product.findById(id)
      .then(product => res(product), error => rej(error))
    });
  }
  
  exports.add = function(object) {
    var newCategory = new Product(object)
    return new Promise((res, rej) => {
      newCategory.save()
      .then(product => res(product), error => rej(error))
    });
  }
  
  exports.update = function(id, object) {
    return new Promise((res, rej) => {
        Product.findByIdAndUpdate(id, object)
        .then(product => res(product), error => rej(error))
    });
  }
  
  exports.delete = function(id) {
    return new Promise((res, rej) => {
        Product.findByIdAndRemove(id)
        .then(product => res(product), error => rej(error))
    })
  }