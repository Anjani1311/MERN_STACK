let greet="Anjani";
let name1="Pandit";
let fullname=`${greet} ${name1}`;   // ES6 template string
console.log(fullname)

//Escap sequescence
//console.logWindows line break: '\r\n'
//Unix line break: '\n'
//Tab: '\t'
//Backslash '\'

sent='I\'m Anjani pandit';
add="Kumari"
console.log(sent);
console.log(sent.length);
console.log(sent[5]);
console.log(sent[sent.length-1]);
newsent="Kumari "+ sent;
console.log(newsent)

let className = 'btn';
className += ' btn-primary'
className += ' none';
console.log(className);

st = false;
console.log('status:', st)

str = st.toString();// is convert a value to string
console.log('str:', str)

str=Boolean(str);
console.log(str)


//Comparing strings
let result = 'a' < 'b';
console.log(result);

result = 'a' < 'B';
console.log(result);



str = new String('JavaScript String Type');
console.log(str.length);
console.log(str.valueOf());
console.log(str.toString());
console.log(str.toLocaleString());
console.log(str[0]);
console.log(str.charAt(5));


let firstName = 'John';
let fullName = firstName.concat(' ', 'Doe');
console.log(fullName);
console.log(firstName);

firstName = 'John';
fullName = firstName + ' ' + 'Doe';
console.log(fullName);

str = "JavaScript String";
console.log(str.substr(0, 10));
console.log(str.substr(11, 6));
console.log(str.substring(4, 10));

//Locating substrings
str = "This is a string";
console.log(str.indexOf("is"));
console.log(str.indexOf('is', 3));
console.log(str.lastIndexOf('is'));
console.log(str.lastIndexOf('ing'));
console.log('str:', str)

// Removing whitespace characters
let rawString = '      Hi        ';
console.log('rawString:', rawString)
let strippedString = rawString.trim();
console.log(strippedString);

greeting = 'Hello';
console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());
console.log('A'.localeCompare('Z'));
console.log('B'.localeCompare('B'));
console.log('D'.localeCompare('A'));

str = "This is a test of search()";
pos = str.search(/is/);           //REGX  Regular Expression
console.log(pos);

string1 = "the baby kicks the ball";
var newstr = string1.replace(/the/g, "a");
console.log(newstr)

var newstr=string1.replace(/the/,"a");
console.log(newstr)

newStr = string1.replace('kicks', 'holds');
console.log(newStr);


//trim end and start
str = '   JavaScript   ';
result = str.trimStart();
console.log({ str });
console.log({ result });
result = str.trimEnd();
console.log({ str });
console.log({ result });
str = 'JavaScript String split()';
substrings = str.split(' ');

console.log(substrings);

str = 'JavaScript String split()';
substrings = str.split(' ', 2);
console.log('substrings:', substrings)

let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
let sentences = paragraph.split(/[!,?,.]/,3);
console.log(sentences);


let a = 'de'
str = '96@gmail.com'.padStart(19, '*');
console.log(a + str);

//Pad
str = 'abc'.padStart(5);
console.log(str);

str = 'abc'.padEnd(5);
console.log(str);

str = 'abc'.padEnd(5, '*');
console.log(str);

str = 'abc'.padEnd(7, 'defghijk');
console.log(str);

greeting = 'Hi';
message = greeting.concat(' ', 'John');

console.log(message);


colors = ['Blue', ' ', 'Green', ' ', 'Teal'];
console.log('colors:', colors)
result = ''.concat(...colors);// ES6 Array Destructuring
console.log(result);