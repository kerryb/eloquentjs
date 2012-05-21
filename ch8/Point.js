function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.add = function(point) {
  return new Point(this.x + point.x, this.y + point.y);
};

Point.prototype.isEqualTo = function(point) {
  return this.x === point.x && this.y === point.y;
};
