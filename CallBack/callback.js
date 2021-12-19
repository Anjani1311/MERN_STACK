//This is a simple callback function
function show(){
    console.log("I am show function")
}
function Demo(callBack){
    callBack()
}
Demo(show)



//This is a parameterized callback function
function Display(a){
    console.log(a+5)
}
function calculation(value, CallBack){
    CallBack(value)
}
calculation(10, Display)

///////////////////////
function view(a){
    console.log(a)
}
function calculation1(x, y, CallBack){
    let z=x+y;
    CallBack(z)
}
calculation1(10,20, view)



/////////////////
function calculation1(x, y, CallBack){
    let z=x+y;
    CallBack(z)
}
//* callback with name function
calculation1(10,20, function view(a){  
    console.log(a)
})
//* callback with anonymus function
calculation1(50,20, function (a){    
    console.log(a)
})

//* callback with Arrow function
calculation1(50,20, a=>{console.log(a);})