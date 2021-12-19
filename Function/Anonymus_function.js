let show=function (){
    return("Anonymus function")
}
console.log(show())


//Can assign this function in vvariable
let a=show()
console.log(a)

//use anonymus function as argument in another function
setTimeout(function(){
    console.log("Anjani pandit")
},5000);

//IIFE - i=imediatly invoked function no requried to call this type of function

(function (){
    console.log("ANjani");
})();


//Arrow functions
show = () => console.log('Anonymous function');
show();

//You can not declar function with same name
var add = function (a, b) {
    return a + b;
};

var add = (a, b) => a + b; 



let parse={
    firstname:"ANjanni",
    age:'45'
}
(function (){
    console.log(`${person.firstname} ${person.age}`);
})(parse);


