function isGreater(param1,param2){
    param1 = param1 || 0;
    param2 = param2 || 0;
    return param1 > param2
}

function isGreater2(param1,param2=6){
    console.log(param1,param2)
    return param1>param2
}


function calc(operation, ...a){
    return a.reduce(
        function(x,y){
            return eval(x+operation+y)
        }
    )
}

console.log(calc("+",1,2,3,10,20))
