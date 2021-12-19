const p='{name:"Anjani", age:34, Salary:40000}'
const obj=JSON.parse(p);
console.log(obj.name)
obj.name="Reshmi"
console.log(obj["name"])
console.log(obj.name)
obj['name']="Tanu"
console.log(obj.name)


