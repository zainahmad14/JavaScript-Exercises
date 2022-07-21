const sum =  (integer1, interger2) => {
    if (integer1 === interger2) {
        return 3 * integer1 + interger2;
    }
    return integer1 + interger2
};

console.log('2 + 3 = ' + sum(2, 3));

console.log('2 + 2 = ' + sum(2, 2));