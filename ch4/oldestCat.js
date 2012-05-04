function oldestCat(cats) {
  var oldest;
  for (var name in cats) {
    var cat = cats[name];
    if (!("death" in cat)) {
      if (oldest === undefined || cat.birthdate < oldest.birthdate) {
        oldest = cat;
      }
    }
  }
  return oldest;
}

show(oldestCat(findCats()));
