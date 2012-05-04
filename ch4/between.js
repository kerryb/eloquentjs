function between(string, startMarker, endMarker) {
  var start = string.indexOf(startMarker) + startMarker.length;
  var end = string.indexOf(endMarker, start);
  return string.slice(start, end);
}

show(between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")"));
show(between("bu ] boo [ bah ] gzz", "[ ", " ]"));
