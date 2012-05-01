function startsWith(string, prefix) {
  return string.slice(0, prefix.length) === prefix;
}

show(startsWith("FooBar", "Foo"));
show(startsWith("FooBar", "Foot"));
