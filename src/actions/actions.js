/* eslint-disable import/prefer-default-export */
export const calculateBMI = (height, weight, callback) => {
  const heightToM = height / 100;
  const heightToMSquare = heightToM ** 2;
  const floored = (weight / heightToMSquare).toFixed(1);

  callback(floored);
};
