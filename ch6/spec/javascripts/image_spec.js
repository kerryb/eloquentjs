describe("image", function(){
  it("builds an img tag structure", function(){
    expect(image("foo.png", "A foo")).toEqual(
        {name: "img", content: [], attributes: {alt: "A foo"}});
  });

  it("Defaults the alt text to the filename", function(){
    expect(image("foo.png")).toEqual(
        {name: "img", content: [], attributes: {alt: "foo"}});
  });
});
