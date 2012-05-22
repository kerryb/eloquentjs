describe("method", function(){
  it("binds a function to its constructor", function(){
    var arr = [];
    var push = method(arr, "push");
    push("A");
    expect(arr).toContain("A");
  });
});
