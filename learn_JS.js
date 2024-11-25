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

//scope
function doSomething(){
    let x = 12;
    let y= 17;
    let z= 11;
    console.log(x,y,z);
}
doSomething();