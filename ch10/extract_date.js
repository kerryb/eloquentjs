function extract_date(str) {
  var matches = str.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (matches) {
    return new Date(matches[3], matches[2] - 1, matches[1]);
  } else {
    throw(new Error("No dates found"));
  }
}
