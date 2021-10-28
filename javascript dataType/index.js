/* Data Type 
Defined data type
undefined data type */


//Undefined
var a;
console.log(a)

//defined
var b="Anjani kumari";
console.log(b)

//Number
var c=23;
console.log(c)

//Float
var d=34.2;
console.log(d)

//Exponential
var e=4.25e+6;
console.log(e)

var f=4.25*1000000;
console.log(f)

var g=4.25e-6;
console.log(g)

var h=4.25/1000000;
console.log(h)


//String
var i="Anjani";
console.log(i)

let input="Anjani";
//let input=4;
if (typeof (input) != 'string')
{
    console.log(input/2);
    console.log(input/(2+10));
    console.log(Math.sqrt(input));
}
else{
    console.log("Please enter no");
}


//Infinity
console.log(12/0)
console.log(-12/0)
console.log(17/-0)


//Arrays
var colors=['Red','Yellow','Green','Orange'];
var cities=['London','paris','NewYork'];

console.log(typeof(colors))
console.log(typeof(cities))

console.log('colors:',colors)
console.log('colors:',colors[2])
console.log('colors',colors[-1]) //Can't read  from right to left......


//Funtion Type 
var greet= function (){
    return "Hellow Anjani"
}
console.log("greeting:",greet())
console.log("greeting:",typeof(greet))


//Dictionary
var emptydict={};
var person={"name":"Anjani", "surname":"Pandit", "age":"65"};
var car={"model":"BMW","color":"White","door":54};

console.log(emptydict)
console.log(person)
console.log(typeof(person))



