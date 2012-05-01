function addToSet(set, value) {
  set[value] = true;
}

function removeFromSet(set, value) {
  delete set[value];
}

function includedInSet(set, value) {
  return value in set;
}

var set = {};
addToSet(set, "Hello");
show(set);

addToSet(set, 42);
show(set);

removeFromSet(set, "Hello");
show(set);

show(includedInSet(set, 42));
show(includedInSet(set, "foo"));
