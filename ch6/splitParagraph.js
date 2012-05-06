function splitParagraph(para) {
  function findNext(str, markers) {
    for (var i = 0; i < markers.length; i ++) {
      var next = str.indexOf(markers[i], 1);
      if (next !== -1) {
        return next;
      }
    }
    return str.length;
  }

  var remainder = para;
  var chunks = [];
  var end;
  while (remainder.length !== 0) {
    if (remainder[0] === "*") {
      end = findNext(remainder, ["*"]);
      chunks.push({content: remainder.slice(1, end), type: "emphasis"});
      remainder = remainder.slice(end + 1);
    } else if (remainder[0] === "{") {
      end = findNext(remainder, ["}"]);
      chunks.push({content: remainder.slice(1, end), type: "footnote"});
      remainder = remainder.slice(end + 1);
    } else {
      end = findNext(remainder, ["*", "{"]);
      chunks.push({content: remainder.slice(0, end), type: "normal"});
      remainder = remainder.slice(end);
    }
  }
  return chunks;
}
