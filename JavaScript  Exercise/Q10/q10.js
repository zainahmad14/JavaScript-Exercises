const checkNum = (number) => {
    if (number % 3 == 0 || number % 7 == 0) { 
        return Boolean(true);
    } 
    return Boolean(false);
}

console.log('checkNum() -> ' + checkNum(14));

console.log('checkNum() -> ' + checkNum(21));

console.log('checkNum() -> ' + checkNum(4));

console.log('checkNum() -> ' + checkNum(8));