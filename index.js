function receivesAFunction(callback){
    callback();
}
receivesAFunction() 

function returnsANamedFunction (Spy){
    return function receivesAFunction (callback){Spy};

}
function returnsAnAnonymousFunction (){
    return function (){};
}