function functionName(parameters) {
    // function body
    // ...
}


function say(a) {
    return a;
}

result = say('Debasish');
console.log('Result:', result);

function add(a=3,b=2){
    console.log(a)
    console.log(b)
    return a+b;
}
console.log(add(2,4))



function average(a, b, fn) {
    a=sum(a,b)
    console.log(a)
    return fn(a, b) / 2;
}
result = average(10, 20, sum);
console.log('result:', result);

//Returning functions from functions
function compareBy(propName) {
    return function (a, b) {
        let x = a[propName],
            y = b[propName];
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1
        } else {
            return 0;
        }
    }
}

let products = [
    { name: 'iPhone', price: 900, cost:20},
    { name: 'Samsung Galaxy', price: 850,cost:20 },
    { name: 'Sony Xperia', price: 700,cost:20 }
];

console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);

console.log('Products sorted by price:');
products.sort(compareBy('price'));
console.table(products);