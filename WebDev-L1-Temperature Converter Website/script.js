// ===================================================
// Temperature Converter JavaScript
// ===================================================

// Get references to DOM elements
const tempInput = document.getElementById('tempInput');
const unitSelect = document.getElementById('unitSelect');
const outputUnitSelect = document.getElementById('outputUnitSelect');
const convertBtn = document.getElementById('convertBtn');
const errorMessage = document.getElementById('errorMessage');
const resultSection = document.getElementById('resultSection');
const resultsContainer = document.getElementById('resultsContainer');

// Function to display an error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    resultSection.classList.remove('show');
    resultsContainer.innerHTML = '';
}

// Function to clear any active error message
function clearError() {
    errorMessage.textContent = '';
    errorMessage.classList.remove('show');
}

// Function to format temperature to at most 2 decimal places
function formatTemperature(value) {
    return parseFloat(value.toFixed(2));
}

// Main function to convert temperature
function convertTemperature() {
    const inputValue = tempInput.value.trim();
    const fromUnit = unitSelect.value;
    const toUnit = outputUnitSelect.value;

    // 1. Validation: Reject non-numeric or empty input
    if (tempInput.validity.badInput) {
        showError('Please enter a valid numeric value.');
        return;
    }

    if (inputValue === '') {
        showError('Please enter a temperature value.');
        return;
    }

    const temperature = Number(inputValue);

    if (isNaN(temperature)) {
        showError('Please enter a valid numeric value.');
        return;
    }

    // 2. Edge Case Handling: Absolute zero violations
    // Celsius: -273.15 °C | Fahrenheit: -459.67 °F | Kelvin: 0 K
    if (fromUnit === 'celsius' && temperature < -273.15) {
        showError('Temperature cannot be below absolute zero (-273.15 °C).');
        return;
    }

    if (fromUnit === 'fahrenheit' && temperature < -459.67) {
        showError('Temperature cannot be below absolute zero (-459.67 °F).');
        return;
    }

    if (fromUnit === 'kelvin' && temperature < 0) {
        showError('Temperature cannot be below absolute zero (0 K).');
        return;
    }

    // Clear any previous error
    clearError();

    // 3. Convert input temperature into base units (Celsius, Fahrenheit, Kelvin)
    let c, f, k;

    if (fromUnit === 'celsius') {
        c = temperature;
        f = (temperature * 9 / 5) + 32;
        k = temperature + 273.15;
    } else if (fromUnit === 'fahrenheit') {
        c = (temperature - 32) * 5 / 9;
        f = temperature;
        k = ((temperature - 32) * 5 / 9) + 273.15;
    } else if (fromUnit === 'kelvin') {
        c = temperature - 273.15;
        f = ((temperature - 273.15) * 9 / 5) + 32;
        k = temperature;
    }

    // 4. Build Result Display Area
    resultsContainer.innerHTML = '';

    const results = [];

    if (toUnit === 'all' || toUnit === 'celsius') {
        results.push({ name: 'Celsius', value: formatTemperature(c) + ' °C', cardClass: 'celsius-card' });
    }
    if (toUnit === 'all' || toUnit === 'fahrenheit') {
        results.push({ name: 'Fahrenheit', value: formatTemperature(f) + ' °F', cardClass: 'fahrenheit-card' });
    }
    if (toUnit === 'all' || toUnit === 'kelvin') {
        results.push({ name: 'Kelvin', value: formatTemperature(k) + ' K', cardClass: 'kelvin-card' });
    }

    // Generate result cards
    results.forEach(function (item) {
        const card = document.createElement('div');
        card.className = 'result-card ' + item.cardClass;

        const nameSpan = document.createElement('span');
        nameSpan.className = 'unit-name';
        nameSpan.textContent = item.name;

        const valueSpan = document.createElement('span');
        valueSpan.className = 'unit-value';
        valueSpan.textContent = item.value;

        card.appendChild(nameSpan);
        card.appendChild(valueSpan);
        resultsContainer.appendChild(card);
    });

    // Show result display area
    resultSection.classList.add('show');
}

// Event Listeners
convertBtn.addEventListener('click', convertTemperature);

// Allow pressing "Enter" in the input field to trigger conversion
tempInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        convertTemperature();
    }
});

// Clear error message when user modifies input or selectors
tempInput.addEventListener('input', clearError);
unitSelect.addEventListener('change', clearError);
outputUnitSelect.addEventListener('change', clearError);
