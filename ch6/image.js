function image(src, alt_text) {
  return tag("img", [], {alt: alt_text || src.slice(0, src.indexOf("."))});
}
