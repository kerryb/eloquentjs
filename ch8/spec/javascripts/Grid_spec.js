describe("Grid", function(){
  describe("each", function(){
    it("loops through points, a row at a time", function(){
      grid = new Grid(2, 2);
      grid.setValueAt(new Point(0, 0), "TL");
      grid.setValueAt(new Point(1, 0), "TR");
      grid.setValueAt(new Point(0, 1), "BL");
      grid.setValueAt(new Point(1, 1), "BR");
      var points = [];
      grid.each(function(point, value){
        points.push(point.x);
        points.push(point.y);
        points.push(value);
      });
      expect(points).toEqual([
        0, 0, "TL",
        1, 0, "TR",
        0, 1, "BL",
        1, 1, "BR"
      ]);
    });
  });
});
