const number1 = 5;
const number2 = 10;

function subtract(a, b) {
    return a - b;
}

console.log(`Wynik odejmowania ${number2} - ${number1} =`, subtract(number2, number1));

function multiply(a, b) {
    return a * b;
}

console.log(`Wynik mnozenia ${number2} * ${number1} =`, multiply(number2, number1));

function division(a, b) {
    if (b === 0) {
        return "Error:division by zero!";
    }
    return a / b;
}

console.log(`Wynik dzielenia ${number2} / ${number1} =`, division(number2, number1));



