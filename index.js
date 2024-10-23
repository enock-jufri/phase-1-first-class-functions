function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    function fn() {
        return 'first class'
    }
    return fn
}
function returnsAnAnonymousFunction(){
    return function(){
        return 'good'
    }
}