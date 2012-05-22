describe("Terrarium", function(){
  describe("toString", function(){
    it("returns the grid as a string", function(){
      var terrarium = new Terrarium(thePlan);
      var planString = reduce(function(a, b){return a + b + "\n";}, "", thePlan);
      expect(terrarium.toString()).toEqual(planString);
    });
  });
});
