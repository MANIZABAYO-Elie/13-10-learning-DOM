// console.log("hello world");
// // variables ; a variable is a container that stores values
// // declaration and assignment 

// let  x= 17;
// console.log(x);
// let age = 25;
// console.log(age);
// console.log(typeof age);

// let firstName = "Elie";
// console.log(typeof firstName);
// console.log(`my name is ${firstName} and I am ${age} old`);
// let online = true;
// console.log(typeof online);

// // Arthmetic operators

// let students = 30;
// students += 1;
// console.log(students);

// // accepting user input
// //1.window prompt
// //2.professional way or HTML textbox

// // Type conversion 
// let num = 123;
// console.log(typeof num);
// // Math properties
// let c= 2.155;
// let e = 3;
//   f= Math.round(c);
//   console.log(f);

// if statement
// let age = 25 ;
// if(age>=18){
//   console.log("You are old enough to enter this site ");
// }else{
//   onsole.log("You must be 18+ to enter this site ");
// }
// let time = 17;
// let name = "Elie"
// if (time<12) {
// console.log(`Good morning ${name}`);
  
// }else if(time>12) {
//     console.log(`Good Afternoon ${name}`);
// }

// let isStudent = true;
// if(isStudent){
//   console.log("you are a student");
// }else{
//   console.log("you are not a student");
// }


//strings methods
// let str = "elie";
// str.charAt(0);
// console.log(str.charAt(0));
// string slicing
// const fullName = "MANIZABAYO Elie"
// let lastName = fullName.slice(0,10);
// console.log(lastName);
// let firstName = fullName.slice(11);
// console.log(firstName);
// const temp = 20;
// if(temp>0 && temp<=30){
//     console.log("Weather is Good");
// }
// else{
//     console.log("Weather is bad");
// }

// const pi = 3.14;
// if(pi != "3.14"){
//     console.log("this is not pi");
// }else{
//     console.log("this pi");
// }
//  

//  functions expressions

// const mutiplyNumbers = function(a,b){
//     return a*b;
    

// }
// console.log(mutiplyNumbers(12,10));
//  const multiplyTwoNumers = (a,b) =>a*b;
// console.log(multiplyTwoNumers(10,10));


// let numbers = [4,7,11,19,20];
// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers)
// console.log(maxNumber);
// console.log(minNumber);
// // random password
// // jason files

// functions

// function multiplyTwoNumers(num1, num2){
//     return num1*num2
// }
// console.log(multiplyTwoNumers(10,15)); 
// const addTwoNumbers = function(a,b){
//     return a+b;
// }
// console.log(addTwoNumbers(10,11));
// const add = (a,b)=>{
//     return a+b;
// }
// console.log(add(100,50));

// global scope
// function doSomething(x,y,z){
//     return x*y*z
// }

// console.log(doSomething(9,2,7));

// const cube = function(x){
//     return x*x*x ;

// }
// const numbers =[1,2,4,5,6]
// console.log(Map(cube, numbers));

// const cube = function (x) {
//     return x * x * x;
//   };
  
//   const numbers = [0, 1, 2, 5, 10];
//   console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
//   console.log(cube());


// function factorial(n){
//     if(n===0|| n===1){
//        return 1
//     }else{
//         return  n*factorial(n-1)
//     }
// }
// console.log(factorial(1));


// function validateEmail(email){
// if(email===""){
//     console.log("enter a valid credentials");
// }
// }
// validateEmail("")
// function addTwoNumbers(a,b){
//     return a+b;

// }
// console.log(addTwoNumbers(10,17));
// const myArray = [[1,2,3,4,5][8,9,10]]
// const myData  =myArray[0][0];
// console.log(myData);
// 

const array = [1,3,7,10,15,17,20,21]
let total =0
for (let index = 0; index < array.length; index++) {
    total += array[index];
    
}
console.log(total);