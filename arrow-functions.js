var test = function(){
    return 1;
}

var test2 = (arg1,arg2) => console.log(arg1 + arg2);

var test3 = (arg1,arg2) => {
    console.log(arg1 * arg2);
    return arg1*arg2
}

var test4 = arg1 => arg1*2

test2(2,3)
test3(2,3)
console.log(test4(2))