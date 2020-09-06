let $ = {
    get : function(url){
    let p = new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.responseText);
            }
        };
        xhr.error = () => {
            "use strict";
            reject("Error contacting server")
        }
    })
    return p;
    }
}

window.onload = () => {
    $.get('/index.php').then(res => {
        "use strict";
        let obj = JSON.parse(res);
        let ul = '<ul>'
        ul+=obj.map(book => '<li>'+book.title+'</li>');
        document.querySelector('#content').innerHTML = ul;
    }).catch(error => console.log(error))
}