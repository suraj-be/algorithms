function outLier(inputArr) {
  const getEvenNo = n => n % 2 === 0;
  const getOddNo = n => n % 2 !== 0;

  const evens = inputArr.filter(getEvenNo);
  const odds = inputArr.filter(getOddNo);
  return odds.length < evens.length ? odds[0] : evens[0]
}

outLier([1, 3, 5, 7, 9, 10, 13, 15, 17, 19]);