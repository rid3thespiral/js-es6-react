let person = {
    name : 'John',
    lastname : 'Doe'
}

function tag(...params){
    console.log(params)
}

let test = tag `
    His name is: ${person.name} 
    and surname: ${person.lastname}
    age: ${4+5}
`
console.log(test)
