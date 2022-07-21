const changeString = (string) => {
    if (string.length == 2) {
        return string[1] + string[0];
    } else if (string.length > 2) {        
        return string.substring(string.length - 1, string.length) + string.substring(1, string.length - 1) + string[0];
    }
    return string;
}

console.log('changeString() -> ' + changeString(''));

console.log('changeString() -> ' + changeString('a'));

console.log('changeString() -> ' + changeString('ab'));

console.log('changeString() -> ' + changeString('abcd'));