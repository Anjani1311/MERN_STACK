//Assignment Operator
//= is for Assignment operatoer
//== is for compair check only value
//=== is for compairtion with datatype

var num1=34;
var num2='34';

if(num1==num2){
    console.log('true')
}else{
    console.log('false')
}

//triple equal
if(num1===num2){
    console.log('true')
}else{
    console.log('false')
}


var x;
x=12;
console.log(x)

x=30;
x+=12;
console.log(x)

x=10;
x-=12;
console.log(x)

x=30;
x*=12;
console.log(x)

x=36;
x/=12;
console.log(x)


//Comparision Operator
var x = 25;
console.log(typeof (x))
var y = 25;
console.log(typeof (y))
var z = "25";
console.log(typeof (z))

console.log(x == z);  // Prints: true
console.log(x === z); // Prints: false

console.log(x != y);  // Prints: true 
console.log(x !== z); // Prints: true 

console.log(x < y);   // Prints: true
console.log(x > y);   // Prints: false

console.log(x <= y);  // Prints: true
console.log(x >= y); // Prints: false


//Incrementing and Decrementing Operators
var x;
x=10;
console.log(++x)  //preincremental
console.log(x)  //preincremental

x=10;
console.log(--x)  //preincremental
console.log(x) 

x=10;
console.log(x++)  //preincremental
console.log(x)  

x=10;
console.log(x--)  //preincremental
console.log(x)  


var year=2016;
if ((year%400==0) || ((year % 100 != 0) && (year % 4 == 0) ))
{
    console.log("Year is leap.")
}
else{
    console.log("Year is not leap.")
}

