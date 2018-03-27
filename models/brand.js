var mongoose = require('mongoose');

var Brand = mongoose.model('brands', {
    name: {
        type: String,
        required: true
    }
})

exports.add = function(object) {
    var newBrand = Brand(object);
    return new Promise((res, rej) => {
        newBrand.save()
        .then(brand => res(brand), error => rej(error))
    });
}

exports.list = function() {
    return new Promise((res, rej) => {
        Brand.find({})
        .then(brand => res(brand), error => rej(error))
    });
}

exports.get = function(id) {
    return new Promise((res, rej) =>{
        Brand.findById(id)
        .then(brand => res(brand), error => rej(error))
    });

}

exports.update = function(id, object) {
    return new Promise((res, rej) => {
        Brand.findByIdAndUpdate(id, object)
        .then(brand => res(brand), error => rej(error))
    });
}

exports.delete = function(id) {
    return new Promise((res, rej) => {
        Brand.findByIdAndRemove(id)
        .then(brand => res(brand), error => rej(error))
    })
}
