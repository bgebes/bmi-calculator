import moment from 'moment';

const LOCALSTORAGE_KEY = 'entries';

export const calculateBMI = (height, weight, callback) => {
  const heightToM = height / 100;
  const heightToMSquare = heightToM ** 2;
  const floored = parseFloat((weight / heightToMSquare).toFixed(1));

  callback(floored);
  return floored;
};

export const getEntries = () =>
  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];

export const insertEntry = (height, weight, bmi) => {
  const entries = getEntries();
  const { id: lastId } = entries.at(-1) || { id: -1 };

  let grade;
  if (bmi > 29.9) {
    grade = 'Obese';
  } else if (bmi > 24.9) {
    grade = 'Overweight';
  } else {
    grade = 'Normal';
  }

  const newEntry = {
    id: lastId + 1,
    height,
    weight,
    bmi,
    grade,
    date: moment().format('L'),
  };

  const newState = JSON.stringify([...entries, newEntry]);

  localStorage.setItem(LOCALSTORAGE_KEY, newState);
};
