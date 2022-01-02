const Complain=[
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

/* createComplain=(complain)=>{
    setTimeout(()=>{
        Complain.push(complain);
    },1000)
}
 */



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

createComplain({id:6, name:'anjani', complain:'I am no happy.'})
.then(getComplains)
.catch((err)=>{
    console.log(err);
});

/* for (let i = 0; i <= 20; i++) {//< =
    ((index) => {
        setTimeout(() => {
            createComplain({ id: `${i}`, name: `${i}`, complain: `I am not happy with ${i}` })
                .then(getComplains)
                .catch((err) => {
                    console.log(err);
                });

        }, 5000 * index);
    })(i);
} */


for (let i = 0; i <= 20; i++) {
    ((index) => {
        setTimeout(() => {
            createComplain({ id: `${i}`, name: `${i}`, complain: `I am not happy with ${i}` })
                .then(getComplains)
                .catch((err) => {
                    console.log(err);
                });

        }, 5000 * index);
    })(i);
}