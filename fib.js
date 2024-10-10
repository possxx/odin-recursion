function fibRec(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;

  return fibRec(number - 1) + fibRec(number - 2);
}

function fibRecArr(number, first = 0, second = 1) {
  if (number === 0) return [];

  return [first].concat(fibRecArr(number - 1, second, first + second));
}

console.log(fibRecArr(8));
