function countZeroes(numbers) {
  return reduce(function(acc, num) {
                  return num === 0 ? acc + 1 : acc;
                }, 0, numbers);
}
