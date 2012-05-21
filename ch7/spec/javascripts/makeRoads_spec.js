describe("makeRoads", function(){
  it("handles a single road", function(){
    makeRoads("Point Kiukiu", "Hanaiapa", 19);
    expect(roads).toEqual({"Point Kiukiu": [{to: "Hanaiapa", length: 19}]}, {"Hanaiapa": [{to: "Point Kiukiu", length: 19}]});
  });
});
