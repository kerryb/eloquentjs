function extractDate(para) {
  return new Date(para.slice(5, 15).split("/").reverse());
}

show(extractDate("died 27/04/2006: Black Leclère"));
