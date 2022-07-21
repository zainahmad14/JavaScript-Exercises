const string = (str) => {
    if (str.startsWith('Py')) {
        return str;
    }
    return 'Py' + str;
}

console.log('string() -> ' + string('python'));

console.log('string() -> ' + string('Python'));

console.log('string() -> ' + string('thon'));
