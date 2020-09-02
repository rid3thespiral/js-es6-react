function sum(arg1,arg2,arg3,arg4){
    return [].reduce.call(arguments, (a,b)=>a+b)
}

//destructuring array
let arr = [3,5,11,55]

console.log(sum(...arr))

//destructuring objects

let obj = {
    name: "John",
    lastName: "Doe"
}

let {name : Nome, lastName : Cognome} = obj
console.log(Nome, Cognome)
