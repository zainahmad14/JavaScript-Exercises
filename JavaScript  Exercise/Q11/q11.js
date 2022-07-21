const setDateFormat = (currentDate, format) => {
    console.log(currentDate.getMonth() + format + currentDate.getDate() + format + currentDate.getFullYear());
    console.log(currentDate.getDate() + format + currentDate.getMonth() + format + currentDate.getFullYear());
}


const dateFormates = () => {
    setDateFormat(new Date(), '-');
    setDateFormat(new Date(), '/');
}

dateFormates();