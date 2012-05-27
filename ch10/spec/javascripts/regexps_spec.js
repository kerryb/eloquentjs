describe("date_regexp", function(){
  it("matches dates in the format DD/MM/YYYY", function(){
    expect("born 15/11/2003 (mother Spot): White Fang".search(date_regexp)).toEqual(5);
  });
});

describe("email_regexp", function(){
  it("matches simplified e-mail addresses", function(){
    expect("To: kerryjbuckley@gmail.com".search(email_regexp)).toEqual(4);
  });

  it("allows upper case characters", function(){
    expect("To: KerryBuckley@Gmail.Com".search(email_regexp)).toEqual(4);
  });

  it("allows numbers, dots and hyphens", function(){
    expect("To: kerry.buckley-42@foo-bar123.example.com".search(email_regexp)).toEqual(4);
  });

  it("does not allow underscores", function(){
    expect("To: kerry_buckley@example.com".search(email_regexp)).toEqual(-1);
  });

  it("requires at least two characters in the final domain segment", function(){
    expect("To: someone@example.c".search(email_regexp)).toEqual(-1);
  });

  it("requires at most three characters in the final domain segment", function(){
    expect("To: someone@example.comx".search(email_regexp)).toEqual(-1);
  });

  it("allows upper case and digits in the final domain segment", function(){
    expect("To: someone@example.B2B".search(email_regexp)).toEqual(4);
  });
});
