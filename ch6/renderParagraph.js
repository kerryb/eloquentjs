function renderFragment(fragment) {
  switch (fragment.type) {
    case "normal":
      return fragment.content;
    case "emphasis":
      return tag("em", [fragment.content]);
    case "reference":
      return tag("sup", [tag("a", [String(fragment.number)], {href: "#footnote" + fragment.number})]);
    default:
      return "";
  }
}

function renderParagraph(para) {
  return tag("p", map(renderFragment, para));
}
