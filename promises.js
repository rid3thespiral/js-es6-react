let cond = false;

let p = new Promise( (resolve, reject)=>{
    if(cond)
        resolve(24)
    else
        throw new Error('there was an error')
});

p.then(res => {
    console.log(res)
}).catch(error => console.log(error));