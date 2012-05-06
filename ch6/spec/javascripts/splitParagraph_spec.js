describe("splitParagraph", function(){
  it("leaves a simple paragraph unchanged", function(){
    expect(splitParagraph("a paragraph")).toEqual(
      [{content: "a paragraph", type: "normal"}]);
  });

  it("extracts an emphasised part at the beginning", function(){
    expect(splitParagraph("*This* is a paragraph!")).toEqual(
      [{content: "This", type: "emphasis"},
      {content: " is a paragraph!", type: "normal"}]);
  });

  it("extracts an emphasised part in the middle", function(){
    expect(splitParagraph("This *is* a paragraph!")).toEqual(
      [{content: "This ", type: "normal"},
      {content: "is", type: "emphasis"},
      {content: " a paragraph!", type: "normal"}]);
  });

  it("extracts an emphasised part at the end", function(){
    expect(splitParagraph("This is a *paragraph!*")).toEqual(
      [{content: "This is a ", type: "normal"},
      {content: "paragraph!", type: "emphasis"}]);
  });

  it("extracts a footnote at the beginning", function(){
    expect(splitParagraph("{footnote} blah")).toEqual(
      [{content: "footnote", type: "footnote"},
      {content: " blah", type: "normal"}]);
  });

  it("extracts a footnote in the middle", function(){
    expect(splitParagraph("blah {footnote} blah")).toEqual(
      [{content: "blah ", type: "normal"},
      {content: "footnote", type: "footnote"},
      {content: " blah", type: "normal"}]);
  });

  it("extracts a footnote at the end", function(){
    expect(splitParagraph("blah {footnote}")).toEqual(
      [{content: "blah ", type: "normal"},
      {content: "footnote", type: "footnote"}]);
  });
});
