// This one's from the book
function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}

function image(src, alt_text) {
  return tag("img", [], {alt: alt_text || src.slice(0, src.indexOf("."))});
}
