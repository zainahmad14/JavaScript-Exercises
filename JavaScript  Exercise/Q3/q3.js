function absoluteDifference (integer1, integer2) {
    return ((Math.abs(integer1) - Math.abs(integer2)) > 19) ? 3 * (Math.abs(integer1) - Math.abs(integer2)) : Math.abs(integer1) - Math.abs(integer2);
}

console.log('Absolute difference is: ' + absoluteDifference(26, -6));


console.log('Absolute difference is: ' + absoluteDifference(-26, -7));