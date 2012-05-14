function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}

function footnote(number) {
  return tag("sup", [link("#footnote" + number,
                          String(number))]);
}
