function greaterThan(y) {
  return function(x) {
    return x > y;
  };
}

biggish = greaterThan(10);
massive = greaterThan(100);

show(biggish(5));
show(biggish(15));
show(massive(101));
