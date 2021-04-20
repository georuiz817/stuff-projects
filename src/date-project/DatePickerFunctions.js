//protects day from going below 1 when the user is clicking the down arrow or typing in an answer
export const setDayToOne = (day, setDay) => {
  if (day > 1) {
    setDay(day - 1);
  } else {
    setDay(31);
  }
};

//resets the days to one if a user tries to click past 31 on the up arrow
export const setDayNotPastMax = (day, setDay) => {
  if (day < 31) {
    setDay(day + 1);
  } else if (day === 31) {
    setDay(1);
  }
};

//cycles up through the array of month name strings, protects it from going past length (Dec)
export const addMonthUp = (arr, x, setMonth) => {
  if (arr.indexOf(x) < arr.length - 1) {
    setMonth(arr[arr.indexOf(x) + 1]);
  } else {
    setMonth(arr[0]);
  }
};

//cyrcle through month, and if we try and go past jan cycle to top
export const addMonthDown = (arr, x, setMonth) => {
  if (arr.indexOf(x) <= arr.length - 1 && arr.indexOf(x) != 0) {
    setMonth(arr[arr.indexOf(x) - 1]);
  } else if (arr.indexOf(x) === 0) {
    setMonth(arr[arr.length - 1]);
  }
};
