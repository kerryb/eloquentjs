function catNames(para) {
  return para.slice(para.indexOf(":") + 2).split(", ");
}

show(catNames("born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois"));
