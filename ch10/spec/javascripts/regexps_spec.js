describe("date_regexp", function(){
  it("matches dates in the format DD/MM/YYYY", function(){
    expect("born 15/11/2003 (mother Spot): White Fang".search(date_regexp)).toEqual(5);
  });
});
