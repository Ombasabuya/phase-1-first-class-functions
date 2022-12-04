function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function(){return 'Just needed to call you back lol';})

function returnsANamedFunction(){
    return function named(){
        return 'You are a good function';
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "You are an anonymous function";
    }
}