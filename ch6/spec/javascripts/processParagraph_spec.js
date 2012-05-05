describe("processParagraph", function(){
  it("recognises a simple paragraph", function(){
    expect(processParagraph("a paragraph")).toEqual(
      {"content": "a paragraph", "type": "p"});
  });

  it("recognises an h1", function(){
    expect(processParagraph("% heading one")).toEqual(
      {"content": "heading one", "type": "h1"});
  });

  it("recognises other headings", function(){
    expect(processParagraph("%%%% heading four")).toEqual(
      {"content": "heading four", "type": "h4"});
  });
});
