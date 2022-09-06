function fridayThe13ths(year) {
  let thirteenths = [];

  for (month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce(function (count, day) {
    return day.getDay() === 5 ? count += 1 : count;
  }, 0);
}
