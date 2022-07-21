const newString = (string, index) => {
    return string.slice(0, index) + string.slice(index + 1);
}   

console.log('newString() -> ' + newString('abcd', 0));

console.log('newString() -> ' + newString('abcd', 2));

console.log('newString() -> ' + newString('abcd', 3));

