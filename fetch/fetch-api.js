//la Promise che ritorna fetch() viene risolta
//anche nel caso in cui ci sia una risposta 
//404 o 500
//per questo bisogna controllare gli headers
//della risposta http

const fetch = require("node-fetch");

let url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url + 1).then( result => {
    if(result.ok){
        if(result.headers.get('Content-Type').includes('application/json')){
            return result.json()
        }
            throw new Error('response type is not json');
    }
}).then(json => console.log(json))
.catch(error => console.log(error))