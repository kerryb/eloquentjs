function range(n) {
  var array = [];
  for (var index = 0; index <= n; index++) {
    array[index] = index;
  }
  return array;
}

show(range(10));
