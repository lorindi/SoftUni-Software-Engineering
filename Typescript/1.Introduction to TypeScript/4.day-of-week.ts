function dayOfWeek(day: string): number | string {
    if (day === "Monday") {
      return 1;
    } else if (day === "Tuesday") {
      return 2;
    } else if (day === "Wednesday") {
      return 3;
    } else if (day === "Thursday") {
      return 4;
    } else if (day === "Friday") {
      return 5;
    } else if (day === "Saturday") {
      return 6;
    } else if (day === "Sunday") {
      return 7;
    } else {
      return "error";
    }
  }
  console.log(dayOfWeek('Monday'));
  console.log(dayOfWeek('Friday'));
  console.log(dayOfWeek('Invalid'));
  