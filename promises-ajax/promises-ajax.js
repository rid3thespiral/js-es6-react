window.onload = () => {
    alert('loaded');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/index.php');
    xhr.send();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            let res = JSON.parse(xhr.responseText);
            let ul = '<ul>'
            ul+=res.map(book => '<li>'+book.title+'</li>');
            document.querySelector('#content').innerHTML = ul;
        }
    };
    xhr.error = () => {
        "use strict";
        alert("Problem contacting server");
    }
}