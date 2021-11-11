console.log("Anjani")
let a=1
let b=12
console.log(a+b)
let c=49
let d=1
console.log(c+d)

//Array
let black_array=[];
console.log("Blank_arry : ",typeof(black_array))

let athlete = new Array(5)  //Array function with size
console.log("Athelete : ",athlete)

let score = new Array(1,3,2); //Array function with Array Element
console.log("score : ",score)

let signs = new Array('Red','Green','Blue')  //Array function with String elemwnt
console.log("signs : ",signs)

console.log("signs : ",signs[0])
console.log("signs : ",signs[1])
console.log("signs : ",signs[2])
console.log("signs : ",signs.slice(0,2))

//Slice() clone the array
var number=[1,3,5,6,7,9];
console.log(number.slice())

//Copy a portion of an array
var string=["Anjani","Uma","Reshmi","Neha","Faruque"];
var newstring=string.slice(2,5)
console.log(newstring) 


for(i of signs) //Array indexing 
{
console.log("signs : ",i)
}

for(i=0; i<signs.length; i++)  //Array Distructure
{
    console.log("signs : ",signs[i])
}

signs[2]="orange"
for(i=0; i<signs.length; i++)  //Array Updating 
{
    console.log("signs : ",signs[i])
}


//javascript Array splice : Delete,Insert and update
/*
 * Deleting elements using JavaScript Array’s splice() method
 * 
 * Syntax: Array.splice(position,num); (Kis position se kitna elements delete)
 * 
 */
scores=[1,3,5,8,9];
console.log("scores:",scores)

//delete
deletedscore=scores.splice(1,2)
console.log(deletedscore)
console.log(scores)

//Update
/**
 * Replacing elements using JavaScript Array splice() method
 * Syntax: Array.splice(position,how many element to delete,new_element);
 */
names=["Anjani","Arit","Reshmi","Uma","Neha","Ratan"]

names.splice(0,0,"nibbi")
console.log(names)

names.splice(0,3,"nibbi","kumari")  //from 0th index delete 3 elemnt and add string.
console.log(names)

names.splice(1,2,"priya")
console.log(names)

// <---<---<--<---<---lastindexOf()-----<----<----
scores = [10, 20, 30, 10, 40, 20];
// --------->-->---indexOf()---->--->--->--->-->-->

console.log(scores.indexOf(10));
console.log(scores.indexOf(30));
console.log(scores.indexOf(50));
console.log(scores.indexOf(20));
console.log(scores.indexOf(700));
console.log(scores.indexOf(708));
console.log(scores.indexOf(705));
console.log(scores.indexOf(709));
console.log(scores.indexOf(703));

console.log(scores.indexOf(20, -1));
console.log(scores.indexOf(20, -5));

console.log(scores.lastIndexOf(10));
console.log(scores.lastIndexOf(40));  
console.log(scores.lastIndexOf(20));  //access 2nd similar element
console.log(scores.lastIndexOf(50));

//Length
colors = ['red', 'green', 'blue'];
console.log(colors.length)
colors.length=0;   //take 0 value in colors to print
console.log(colors.length)

colors.length=3;   //take 3 value in colors to print
console.log(colors.length)

colors = [];
console.log(colors.length);

numbers = [10, , 20, 30];
console.log(numbers.length);

numbers[10] = 100;
console.log(numbers.length)
console.log('numbers:', numbers)


let fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 5;
console.log(fruits);

//join()
const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass = cssClasses.join('/');

console.log(btnClass);
//document.write('<input type="button" class=' + btnClass + ' value="Click Me"/>');


//Using the JavaScript Array join() method to replace all occurrences of a string
const title = ' JAVAScript Array Join Example';
const url = title.split(' ').join(',#').toUpperCase();

console.log(url);

//ForEach()

let ranks = ['A', 'B', 'C'];

for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}

ranks.forEach(function (e) {
    console.log(e);
});

function print(e){

    console.log(e)
}
ranks.forEach(print)

//Map()
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
let circles = [10, 30, 50];
let areas = [];

for (let i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);

function circleArea(radius){
    return Math.floor(Math.PI*radius*radius);
}
Area=circles.map(circleArea);
console.log(Area)

var num=[1,2,3,4];
var cubenum=num.map(cube);
function cube(number){
    return number*number*number;
}
console.log(cubenum);

var num1=[1,4,9,36];
var squ=num1.map(Math.sqrt)
console.log(squ)

//Home work
//registration Form for Admission for BTech and validate the form usin 
//javscript and show alert if some one is try to fill the data wrongly



//reduce function
sum=[1,2,3,4,5];
total1=sum.reduce(function(a,b){
    a=a+b;
    return a; 
});
console.log(total1)

//Reduce function use inn onject
//JavaScript Array reduce()
let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 69.9
}, {
    product: 'phone',
    qty: 5,
    price: 6.99
}
];

let total = shoppingCart.reduce(function (acc, curr) {
    return acc + (curr.qty * curr.price);
},0);

console.log(total);

//Example reduce
let documantation=[
    {
        id:"Anjani",
        salary:300
    },
    {
        id:"Resham",
        salary:200
    }
];
let totalsal=documantation.reduce(function(t,a){
    return t+a.salary;
},100)
console.log(totalsal)

//Filter
// filter() creates a new array filled with elements that pass a test provided by a function.
// filter() does not execute the function for empty elements.
// filter() does not change the original array.

let cities=[
    {name:"Anjanni", age:52, salary:2000},
    {name:"reshm", age:43,salary:290},
    {name:"uma", age:76,salary:20},
    {name:"srs", age:09,salary:0222},
]
//using conventional methhod
let maxAge=[];
for(i=0; i<cities.length; i++){
    if(cities[i].age>10){
        maxAge.push(cities[i])
    }
}
console.table(maxAge)
//using filter
maxcities=cities.filter(function(a){
    return a.age>10;
})
console.table(maxcities)

nmaxcities=cities.filter(city=> city.age>45);
console.table(nmaxcities)

cities = [
    { name: 'Delhi', population: 3792621 },
    { name: 'Kolkata', population: 8175133 },
    { name: 'Mumbai', population: 2695598 },
    { name: 'Bengaluru', population: 2099451 },
    { name: 'Hyderabad', population: 1526006 },
    { name: 'Chennai', population: 2894498 }
];


var abc = cities.filter(city => city.population < 3000000)
.sort((c1, c2) => c1.population - c2.population)
.map(city => console.log(city.name + ':' + city.population));
console.table(abc)

//sort function
//First sort the string Accoring to Captital letter
//By defaul sort function take number as string 
nomber=[2,4,3,6,12,95];
string=["Anjani","rumana","Resham","banana"]
nomber.sort();
string.sort();
console.log(nomber)
console.log(string)

nomber.sort(function(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
})
console.log(nomber)


scorre=[20,32,55,12];
//using function
scorre.sort(function(a,b){
    return a-b;
})
console.log(scorre)
scorre.sort(function(a,b){
    return b-a;
})
console.log(scorre)


//ES6
scorre.sort((a,b)=> a-b);
console.log(scorre)
scorre.sort((a,b)=>b-a);
console.log(scorre)


