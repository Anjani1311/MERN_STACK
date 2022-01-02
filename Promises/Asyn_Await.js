/* const Complain=[
    {id:1, name:'anjani', complain:'I  am not happy with js.'},
    {id:2, name:'uma', complain:'I  am not happy with java.'},
    {id:3, name:'Resham', complain:'I  am not happy with C++.'},
    {id:4, name:'Dinda', complain:'I  am not happy with C.'},
    {id:5, name:'Debashish', complain:'I  am not happy with Python.'},
];

getComplains=()=>{
    setTimeout(()=>{
        let output=' ';
        Complain.forEach((item, id)=>{  //interpolation
            output +=`<li> ${item.id}. ${item.name} :${item.complain} </li>`;
        });
        document.getElementById('complain').innerHTML=output;
    },1000)
}

createComplain =(complain)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(complain.name.length>0 && complain.complain.length>0){
                Complain.push(complain);
                resolve();
            }else{
                reject('Name and complain is required.');
            }
        },2000)
    })
}

 async function init(){
    await createComplain({id:5, name:'Debashish', complain:'I  am not happy with Python.'},
     )
     .then(getComplains)
     .catch((err)=>{
         console.error(err) 
        })
 }
init();
 */

//With promise functions

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post Three' },
    { title: 'Post Four', body: 'This is post Four' },
];

function getpost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createpost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (post.title.length > 0 && post.body.length > 0) {
                posts.push(post);
                resolve();
            } else {
                reject('Please provied some Value');
            }
        }, 2000);
    });
}

//The word “async” before a function means one simple thing: 
//a function always returns a promise. 
//Other values are wrapped in a resolved promise automatically.
//async ensures that the function returns a promise, and wraps non-promises in it.

async function init() {
    for (let i = 0; i <= 20; i++) {
        await createpost({ title: `Post ${i}`, body: `This is post ${i}` })
            .then(getpost)
            .catch((err) => {
                console.error(err);
            });
    }
}

init();

//Async & Await With Fetch
async function FecthData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.table('data:', data)

}

FecthData();
