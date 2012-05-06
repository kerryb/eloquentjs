function processParagraph(para) {
  function findHeadingLevel(para) {
    if (para[0] === "%") {
      return 1 + findHeadingLevel(para.slice(1));
    } else {
      return 0;
    }
  }

  var headingLevel = findHeadingLevel(para);
  if (headingLevel === 0) {
    return {content: para, type: "p"};
  } else {
    return {content: para.slice(headingLevel + 1), type: "h" + headingLevel};
  }
}
