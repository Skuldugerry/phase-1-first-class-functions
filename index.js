function receivesAFunction(parameter){
    return parameter();
    }
    receivesAFunction(function (){
        console.log(1+1)
    })

receivesAFunction();
function returnsANamedFunction(){
    function mob(a,b){
        return a+b;
    }
    return mob;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I lived forever!")
    }
}