function removeOddSum() {
  const compareObject = [ {a: 5, b: 5},
    {a: 3, b: 4},
    {a: 2, b: 0},
    {a: 2, b: 1}
  ]

  let evenArray = [];

    compareObject.forEach((obj) => {
      if ((obj.a - obj.b) % 2 === 0) {
        evenArray.push(obj);
      };
    });
    return evenArray
};

module.exports = removeOddSum;
