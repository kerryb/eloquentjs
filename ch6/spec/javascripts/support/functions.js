function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}

function footnote(number) {
  return tag("sup", [link("#footnote" + number,
                          String(number))]);
}
