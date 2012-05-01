function formatDate(date) {
  function pad(n) {
    return n >= 10 ? n : "0" + n;
  }
  
  return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) +
         "/" + date.getFullYear();
}

show(formatDate(new Date(2012, 5, 1)));
