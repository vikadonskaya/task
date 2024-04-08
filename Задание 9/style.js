//1
function addZero(numberStr) {
  return String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr);
}

function getDateFormat(date, separator = ".") {
  const dateItem = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));

  return dateArray.join(separator);
}

console.log(getDateFormat(new Date()));
//3
function addDays(date, days = 1) {
  const timestamp = date.getTime();
  const newTimestamp = timestamp + days * 24 * 60 * 60 * 1000;
  return new Date(newTimestamp);
}

const currentDate = new Date();
const newDate = addDays(currentDate, 5);
console.log(newDate);
