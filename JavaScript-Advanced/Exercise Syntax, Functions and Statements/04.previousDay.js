function previousDay(year, month, day) {
    let dateInput = `${year}- ${month}-${day}`
    let date = new Date(dateInput);
    date.setDate(date.getDate()-1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

}
previousDay(2015, 5, 10)