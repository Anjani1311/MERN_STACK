import fetch from 'node-fetch'
//globalThis.fetch=fetch

//this type of promise is uaes to resolve the promise everyight away
const promise1=Promise.resolve('Anjani pandit');

//this type of promise is uses to reject the promise everyight away
const promise2=Promise.reject('Anjani pandit');


const promise3=new Promise((resolve, reject)=>{
    setTimeout(resolve, 'anjani', 1000);
});

const promise4 = fetch('http://fakestoreapi.com/products')
    .then(response => response.json())

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => document.getElementById('complain').innerHTML=values);