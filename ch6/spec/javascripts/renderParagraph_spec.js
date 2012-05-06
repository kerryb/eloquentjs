describe("renderParagraph", function(){
  it("renders a simple paragraph", function(){
    expect(renderParagraph(
        [{content: "a paragraph", type: "normal"}])).toEqual(
        tag("p", ["a paragraph"]));
  });

  it("renders a paragraph with an emphasised section", function(){
    expect(renderParagraph(
        [{content: "an ", type: "normal"},
        {content: "important", type: "emphasis"},
        {content: " paragraph", type: "normal"}])).toEqual(
        tag("p", ["an ", tag("em", ["important"]), " paragraph"]));
  });

  it("renders a paragraph with a footnote", function(){
    expect(renderParagraph(
        [{content: "a paragraph", type: "normal"},
        {type: "reference", number: 42}])).toEqual(
        tag("p", ["a paragraph", tag("sup", [tag("a", ["42"], {href: "#42"})])]));
  });
});
