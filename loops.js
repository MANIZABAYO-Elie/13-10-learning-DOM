// loops 
// const numbers = [1,2,3,4,5]
//  for (let i = 0; i < numbers.length; i++) {
//     const elements = numbers[i];
//     console.log(elements);
//  }
const numbers = [1,2,3,4,5]
  function findSum(){
    let sum = 0;
    for(let i = 0 ; i< numbers.length ; i++){
        sum += numbers[i];
    }
    return sum ;
}
console.log(sum);