//with paramiter with return type
function add(a,b){
    return a+b;
}
console.log(add(2,4))
//whithout paramiter with return type
function product(){
    var a=23;
    var b=65;
    return a+b;
}
console.log(product())

function GST(){
    return (2/100)
}
var t=GST
console.log(t())

var t=GST()
console.log(t)

//with paramiter without return type
function cube(a) {
    let b = a * a * a;
    console.log(b);
}
cube(2);//function call

//without paramiter without return type
function greet() {
    console.log('Hello');
}
t = 12.00;
if (t === 12.00) {
    greet();
}

//In javascript we can pass any number of arguments.
//by defult it will take only one  
//and that argument will be 
//stored in a variable called arguments and that is an array variable.

function add(){
    var sum=0;
    console.log(arguments.length)
    for (i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(add(2,3))
console.log(add(2,3,5,2))
console.log(add(2,3,8,6,2))


// function with obj
function createStudent(name, dept, roll) {
    let obj = { name: name, dept: dept, roll: roll };
    return obj;
}
let student = createStudent('dinda', 'ECE', 45);//parameter of object property
console.log('Name:', student.name)
console.log('Dept:', student.dept)
console.log('Roll:', student.roll)


//function with scope
let t1 = 1000// global scope
function say() {
    let t1 = 10; //local variable with local scope
    console.log('t:', t1);
}

say()
console.log('t:', t1)

//can i call or declar a function under a function

function cal() {
    let counter = 0;

    function plus() {
        counter += 1;
    }

    plus();
    console.log('counter:', counter)
    return counter;

}
let z = cal()
console.log('z:', z)
let ab = cal()
console.log('ab:', ab)

function cal1() {
    switch (arguments.length) {
        case 1:
            console.log('Number:', arguments[0]);
            break;
        case 2:
            console.log('Number:', arguments[0]);
            console.log('Number:', arguments[1]);
            break;
    }
}
cal1(5, 'debasish')