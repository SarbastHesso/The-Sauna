const outputMessage = document.querySelector('#output-message');
const temperatureInput = document.querySelector("#temperature-input");
const confirmBtn = document.querySelector("#btn");

let temperatureInFahrenheit; //a variable for the temperature in fahrenheit that entered by the sauna visitor.
let temperatureInCelsius;
let message; //a message to visitors describing the different positions depending on the sauna's temperature.


// function to convert temperature from fahrenheit to celsius
const fahrenheitToCelsius = (temperatureInFahrenheit) => {
    temperatureInCelsius = parseInt((temperatureInFahrenheit - 32) * 5/9);
};


// function to check, control -the saunas temperature and guide the visitor in order to reach the optimal temperature.
const temperatureController = () => {
  //if statement to check if the sauna temperature is acceptable or not and show a message based on that.
  if (temperatureInCelsius <= 77 && temperatureInCelsius >= 73) {
    message = `Sauna temperature is: ${temperatureInFahrenheit} fahrenheit. Enjoy!`;
  } else if (temperatureInCelsius === 75) {
    message = `Sauna temperature now is: ${temperatureInFahrenheit}, it's the optimal temperature`;
  } else if (temperatureInCelsius < 73) {
    message = `The sauna is cold, the temperature is: ${temperatureInFahrenheit} fahrenheit, turn up the heat a bit`;
  } else if (temperatureInCelsius > 77) {
    message = `The sauna is hot, the temperature is: ${temperatureInFahrenheit} fahrenheit, turn down the heat a bit`;
  } else {
    message = `Something wnnt Wrong, please follow the instruction`;
  }
}

// An eventListener to confirm the value that the visitor entered, confirm will run the tempereatuerController function 
confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    temperatureInFahrenheit = temperatureInput.value;
    fahrenheitToCelsius(temperatureInFahrenheit);
    temperatureController();
    outputMessage.innerText = message;
})