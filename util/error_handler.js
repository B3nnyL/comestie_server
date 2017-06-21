module.exports = function(err){
    var error = {};

    if(err.errmsg) {
        error.base = err.errmsg;
    }
    
    if(err.errors){
        Object.keys(err.errors).forEach(key => {
            error[key] = err.errors[key].message;
        });
    }

    return error;
    
}