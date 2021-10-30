/* javascript code for control Flow */

let a=95;
let b=15;
let c=784;

//conventional way to comapire.
//gretaer in two
if (a>b){
    console.log("a is grater.")
}
else{
    console.log("b is grater.")
}

//ternary operator
let greater=a>b? "A is greater":"B is greter";
console.log(a>b? "a is greater":"b is greater")
console.log(greater)



//greater in three
if(a>b){
    if(a>c){
        console.log("a is grater.")
    }
    else{
        console.log("c is grater.")
    }
}
else if(b>c){
    console.log("b is grater.")
}
else{
    console.log("c is greater.")
}

//Ternary operation
let gretar=a>b? a>c? '*A is greater':'**c is greater':b>c?"**b is grearter":"***c is greater"
console.log(gretar)


