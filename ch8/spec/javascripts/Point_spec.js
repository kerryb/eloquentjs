describe("Point", function(){
  describe("constructor", function(){
    it("creates a point with x and y", function(){
      point = new Point(2, 3);
      expect(point.x).toEqual(2);
      expect(point.y).toEqual(3);
    });
  });

  describe("add", function(){
    it("returns a new point with summed co-ordinates", function(){
      point = new Point(1, 2).add(new Point(3, 4));
      expect(point.x).toEqual(4);
      expect(point.y).toEqual(6);
    });
  });

  describe("isEqualTo", function(){
    it("returns true if x and y are equal", function(){
      expect(new Point(1, 2).isEqualTo(new Point(1, 2))).toBeTruthy();
    });

    it("returns false if x is different", function(){
      expect(new Point(1, 2).isEqualTo(new Point(2, 2))).toBeFalsy();
    });

    it("returns false if y is different", function(){
      expect(new Point(1, 2).isEqualTo(new Point(1, 3))).toBeFalsy();
    });
  });
});
