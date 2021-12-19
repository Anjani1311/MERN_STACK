//using an object instance
var student={name:"Anjani", age:34, gender:"female"}
console.log('Student: '+student.name+ 'is '+student.age+'gender is '+student.gender)

//using sqaure bracket
console.log('Student: '+student['name']+ 'is '+student['age']+'gender is '+student['gender'])
console.log(Object.entries(student))
