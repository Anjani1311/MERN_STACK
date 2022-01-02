function myDisplay(some){
    document.getElementById('demo').innerHTML=some;
}

function myCalculator(x, y, CallBack){
    let sum=x+y;
    CallBack(sum);
}

myCalculator(4,7,myDisplay)


setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

