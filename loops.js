// loops 
// const numbers = [1,2,3,4,5]
//  for (let i = 0; i < numbers.length; i++) {
//     const elements = numbers[i];
//     console.log(elements);
//  }
// const numbers = [1,2,3,4,5]
//   function findSum(numbers){
//     let sum = 0;
//     for(let i = 0 ; i< numbers.length ; i++){
//         sum += numbers[i];
//     }
//     return sum ;
// }
// console.log(findSum(numbers));

const originalArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
function getNumbersDivisibleByTwo(originalArray) {
   
    const divisibleByTwoArray = [];
    for (let i = 0; i < originalArray.length; i++) {
        
        if (originalArray[i] % 2 === 0) {
            
            divisibleByTwoArray.push(originalArray[i]);
        }
    }
    
    return divisibleByTwoArray;
}
console.log( getNumbersDivisibleByTwo(originalArray));

// while loops 
const myArray = []
let i =0 
while (i<5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

const ourArray = [];
for (let i = 0; i <5; i++) {
    ourArray.push(i);
    
}
console.log(ourArray);

let cheese = "milk";

if (cheese==="chiddar") {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
  