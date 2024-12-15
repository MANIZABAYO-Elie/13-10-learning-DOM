// const button = document.getElementById('btn');
// const display = document.getElementById('display');
// button.addEventListener('click',function(){
//     display.innerHTML = "Thank you for reaching with us"
// })
// document.getElementById('my_H1').textContent = 'LEARNING JAVASCRIPT';
// let fullName = "MANIZABAYO Elie";
// document.getElementById('p1').textContent = fullName;
// let age = 26;


//  const button = document.getElementById('myButton');
//  button.addEventListener('click', function(){
//    console.log("hello world"); 
//  })


const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const PayPalBtn = document.getElementById('PayPalBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');
const mySubmit = document.getElementById('mySubmit');
const changeColor =document.getElementById('changeColor');

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You have subscribed"
    }else{
        subResult.textContent = "You have not subscribed"
    }
    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with VISA"
    }else if(masterCardBtn.checked){
         paymentResult.textContent = "You are paying with mastercard"

    } else if(PayPalBtn.checked){
         paymentResult.textContent = "You are paying with PayPal"
        
    }else{
        paymentResult.textContent = "You must select a payment type"
    }
}
function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  
  changeColor.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  });
