const math=require('./index')

math.callbackSum(1,4,function(err,result){
    if(err){
        console.log('module ',err)
    }else{
        console.log(result)
    }
})

math.sum(20,30).then(function(result){
    if(result)
    console.log(result)
}).catch(function(err){
    console.log(err)
})