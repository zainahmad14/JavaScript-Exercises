const newString = (string) => {
    if (string.length > 0) {
        return string[0] + string + string[string.length - 1];
    }
    return string;
}

console.log('newString() -> ' + newString(''));

console.log('newString() -> ' + newString('a'));

console.log('newString() -> ' + newString('ab'));

console.log('newString() -> ' + newString('abc'));