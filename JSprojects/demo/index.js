
//1. ways to print in javascript
//console.log('Hello world');
// alert("me");
//document.write("this is document write")

//2. javascript console API
// multi
// comment 
// line (ctrl + /)

// console.log("Hello World", 4 + 6, "Another Log");
// console.warn("this is warning");
// console.error("this is an error");

//3. javascript variables
// variables - containers to store data values
var number1 = 34;
var number2 = 877;
// console.log(number1 + number2);

// 4. Datatypes in javascript
// numbers
var num1 = 322;
var num2 = 22.33;

// strings
var str1 = "This is a string";
var str2 = "This is a string2";

// objects
var marks = {
    randel: 34,
    ronnie: 33,
    hola: 39,
    nona: 36.12

}

//Booleans
var a = true;
var b = false;

// console.log(a , b);
//console.log(marks);


var und = undefined;
//console.log(und);
var und1;
//console.log(und1);


var n = null;
//console.log(n)


/*
At a very high level, there are 2 types of datatype in javascript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects

*/

var arr = [1, 2, 3, 'string', 4, 5]

// Operators in javascript


var a = 34;
var b = 66;
// console.log('The value of a+b is ', a+b)
// console.log('The value of a/b is ', a/b)
// console.log('The value of a*b is ', a*b)
// console.log('The value of a-b is ', a-b)

// Assignment Operators

// var c= b
// console.log(c);
// c += 2
// c -+ 2
// c *= 2
// console.log(c)


// Comparison operators
// var x= 324
// var y = 7865

// console.log(x == y);
// console.log( x >>> y);
// console.log(x <= y);

//Logical Operators

//Logical AND
// console.log( true && false)
// console.log( true && true)
// console.log( false && true)
// console.log( false && false)

// logical OR
// console.log( true || false)
// console.log( true || true)
// console.log( false || true)
// console.log( false || false)

// Logical NOT
// console.log(!false);
// console.log(!true);


//Function in Javascript
// DRY = Do not repeat yourself
function avg(a, b) {
    return (a + b) / 2;

}
c1 = avg(5, 55);
c2 = avg(34, 43.55);
// console.log(c1,c2);

// Conditionals in Javascript
// 
var age = 8
var b = 9
if (age==8){
 console.log("you're not a kid" );
 }
else{
    console.log("you're a kid")
}


// if else ladder

// if (age>2){
//     console.log("you're not a kid");
// }
// else if(age>25){
//     console.log("you are an adult");
// }
// else if(age > 55){
//     console.log("OLD");
// }
// else{
//     console.log("dead");
// }
// console.log("end of ladder")

// var arr = [1,2,3,4,5,6,70];
// // console.log(arr);
// for(var i = 0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// })

//  let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }


// do{
//     console.log(arr[j]);
//     j++;
// }
//  while(j < arr.length);


// let myArr = ["fan", "cam", 34, null, true];
// //Array methods
// console.log(myArr.length);
// // myArr.pop();
// // myArr.push("potter");
// //myArr.shift()
// // const newLen = myArr.unshift("potter")
// // myArr.unshift("potter")
// console.log(myArr);



///string methods in JAVASCRIPT

// let mystring= "aali is a good boy"
// console.log(mystring.length)
// console.log(mystring.indexOf("good")

// console.log(mystring.slice(1,3))
// d= mystring.replace("aali", "Ahmed");
// console.log(d)


// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

//DOM manupulation

// let elem = document.getElementById('click');
// // console.log(elem);



// let elemClass = document.getElementsByClassName("container")
// // console.log(elemClass);
// // // elem.Class[0].style.background = "black";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// // console.log(elem.innerHTML);
// // console.log(elem.innerText);

