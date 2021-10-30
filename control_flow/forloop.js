for (var count=0; count<=5; count++){
    console.log(count);
}
console.log(count);


var a=2;
for (;a<=10; a+=2){
    console.log(a)
}

for (var a=0; ; a++){
    console.log(a)
    if(a>10){
        break;
    }
    console.log(a)
}

//for loop without any expression
j = 1;
for (; ;) {
    if (j > 10) break;
    console.log(j);
    j += 2;
}

//for loop without the loop body
let sum=0;
for (let i=0; i<=10; i++, sum+=i);
console.log(sum);
