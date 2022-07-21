let years = [
    '2017',
    '2020',
    '1900',
    '2000',
    '2045',
    '2011',
];

let error = 0;

years.forEach(function(value) {
    if (!Number.isInteger(Number.parseInt(value))) {
        error = 1;
    }
});

if (error == 0) {
    years.forEach(function (year) {
        if (year %  100 == 0) {
            if (year % 400 == 0) {
                console.log(`${year}` + ' is a leap year');
            }
        }
        else if (year % 100 != 0 && year % 4 == 0) {
            console.log(`${year}` + ' is a leap year');
        }
        else {
            console.log(`${year}` + ' is not a leap year');
        }
    
    });
}


