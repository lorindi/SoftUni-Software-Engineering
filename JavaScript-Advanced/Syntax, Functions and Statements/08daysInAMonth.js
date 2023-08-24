function daysInAMonth(month, year) {

    const days = new Date(year, month - 1, 0).getDate();
    console.log(`${days}`);
}

daysInAMonth(1, 2012);


