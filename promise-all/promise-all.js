//const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/";

let posts$ = fetch(url + '1').
then(resp => resp.json()).
catch(err => console.log(err))

//posts$.then(post =>console.log(post))

let comments$ = fetch(url + '1/comments').
then(resp => resp.json()).
catch(err => console.log(err))

//comments$.then(comments =>console.log(comments))

Promise.all([posts$, comments$]).then(
    resp => {
        document.getElementsByClassName('resp')[0].innerHTML = JSON.stringify(resp)
    }
).catch(err => console.log(err))