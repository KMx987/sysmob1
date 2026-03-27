import { subtract, multiply, division } from "./calculator.js";

const number1 = 5;
const number2 = 10;

console.log(`Wynik odejmowania ${number2} - ${number1} =`, subtract(number2, number1));

console.log(`Wynik mnozenia ${number2} * ${number1} =`, multiply(number2, number1));

console.log(`Wynik dzielenia ${number2} / ${number1} =`, division(number2, number1));



