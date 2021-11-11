let Employees=[
    {name:"Anjani", salary:6700, hireDate:"july 1,2021"},
    {name:"Reshmi", salary:5433, hireDate:"aug 1,2020"},
    {name:"abhijit", salary:9800, hireDate:"june 1,2022"},
    {name:"Dinda", salary:1200, hireDate:"july 1,2019"},
]
//Sorting object by numeric property
Employees.sort(function(a,b){
    return a.salary-b.salary;
});
console.table(Employees);

//Sorting object by string property
Employees.sort(function(a,b){
    //let x=a.name, y=b.name ;
    let x=a.name.toUpperCase(), y=b.name.toUpperCase();
    return x == y ? 0 : x > y ? 1:-1;
})
console.table(Employees);

//sorting by time and date
Employees.sort(function(x,y){
    let d = new Date(x.hireDate), e = new Date(y.hireDate);
    console.log(d)
    console.log(e)
    return d - e;
})
console.table(Employees);

let naming=["Anjani","reshmi","Hdjani","uma"];
console.log(naming.sort())  //capyial character is smaller than small character.