function range(a, b) {
  var start, end;
  if (b === undefined) {
    start = 0;
    end = a;
  } else {
    start = a;
    end = b;
  }
  var array = [];
  for (var n = start; n <= end; n++) {
    array.push(n);
  }
  return array;
}

show(range(10));
show(range(4, 8));
