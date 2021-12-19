//constructor function
function Student(name, age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
var mystud=new Student("Anjani",54,"female");
console.log(mystud.name)
console.log(mystud.age)
console.log(mystud.gender)



//default method for object creation
var str=new Object()  //built in function for creating object
str.name="Anjani"
str.age=56
str.marks=new Array(87,56,34)
str.print=function(){
    console.log(this.name)
    console.log(this.age)
    console.log(this.marks)
}
str.print();

//making use of create() method
