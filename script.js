// Get input elements from the DOM
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8 + 32).toFixed(2);
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) / 1.8).toFixed(2);
}

// Event listener: When user types in Celsius box
celsiusInput.addEventListener('input', () => {
  if (celsiusInput.value !== '') {
    fahrenheitInput.value = celsiusToFahrenheit(parseFloat(celsiusInput.value));
  } else {
    fahrenheitInput.value = '';
  }
});

// Event listener: When user types in Fahrenheit box
fahrenheitInput.addEventListener('input', () => {
  if (fahrenheitInput.value !== '') {
    celsiusInput.value = fahrenheitToCelsius(parseFloat(fahrenheitInput.value));
  } else {
    celsiusInput.value = '';
  }
});