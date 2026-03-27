export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function division(a, b) {
    if (b === 0) {
        return "Error:division by zero!";
    }
    return a / b;
}