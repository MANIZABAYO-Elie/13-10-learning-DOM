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
const array = [1,2,3,4,9,0,6,7,11,13,17,15,20,22,26,25];
const newArray = []

function getArrayDivisibleByTwo(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2===0) {
    newArray[i].push(array[i])
        }
        return newArray;
    }
    console.log(getArrayDivisibleByTwo(array));
}
;
