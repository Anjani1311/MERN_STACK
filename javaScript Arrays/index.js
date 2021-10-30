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

