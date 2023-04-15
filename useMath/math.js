const Promise=require('bluebird')

module.exports={
    callbackSum:function(a,b,callback){
        if(typeof a !== 'number')
        return callback(new Error('"a" must be a number'))
        if(typeof b !== 'number')
        return callback(new Error('"b" must be a number'))

        return callback(null,a+b)
    },

    PromiseSum:function(a,b){
        return new Promise(function(reject,resolve){
            if(typeof a !=='number')
            return reject(new Error('"a" must ba a number'))
            if(typeof b !== 'number')
            return reject(new Error('"b" must be a number'))

            return resolve(a+b)
        })
    },
    sum:function(a,b,callback){
        return new Promise(function(reject,resolve){
            if(typeof a !== 'number')
            return reject(new Error('"a" must be a number'))
            if(typeof b !== 'number')
            return reject(new Error('"b" must be a number'))

            return resolve(a+b)
        }).asCallback(callback)
    }
    
}