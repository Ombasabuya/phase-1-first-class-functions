function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function(){return 'This is a true callback function example'});

function returnsANamedFunction(){
    return function named(){
        return 'This is  a named function';
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "This is  an anonymous function";
    }
}