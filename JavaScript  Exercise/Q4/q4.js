function checkTwoNumbers(number1, number2) {
    if (number1 == 50 || number2 == 50 || number1 + number2 == 50) {
        return Boolean(true);
    }
    return Boolean(false);
}

console.log('checkTwoNumbers() -> ' + checkTwoNumbers(25, 25));

console.log('checkTwoNumbers() -> ' + checkTwoNumbers(50, 25));

console.log('checkTwoNumbers() -> ' + checkTwoNumbers(25, 50));

console.log('checkTwoNumbers() -> ' + checkTwoNumbers(25, 24));