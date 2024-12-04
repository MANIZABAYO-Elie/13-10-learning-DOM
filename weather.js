const select = document.querySelector('select');
const display = document.querySelector('p');
select.addEventListener("change",setWeather);
function setWeather(){
    const choice = select.value
    if(choice===sunny){
        display.textContent ="It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream."
    }
}
