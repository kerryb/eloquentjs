describe "date_regexp", ->
  it "matches dates in the format DD/MM/YYYY", ->
    expect("born 15/11/2003 (mother Spot): White Fang".search(date_regexp)).toEqual 5

describe "email_regexp", ->
  it "matches simplified e-mail addresses", ->
    expect("To: kerryjbuckley@gmail.com".search(email_regexp)).toEqual 4

  it "allows upper case characters", ->
    expect("To: KerryBuckley@Gmail.Com".search(email_regexp)).toEqual 4

  it "allows numbers, dots and hyphens", ->
    expect("To: kerry.buckley-42@foo-bar123.example.com".search(email_regexp)).toEqual 4

  it "does not allow underscores", ->
    expect("To: kerry_buckley@example.com".search(email_regexp)).toEqual -1

  it "requires at least two characters in the final domain segment", ->
    expect("To: someone@example.c".search(email_regexp)).toEqual -1

  it "requires at most three characters in the final domain segment", ->
    expect("To: someone@example.comx".search(email_regexp)).toEqual -1

  it "allows upper case and digits in the final domain segment", ->
    expect("To: someone@example.B2B".search(email_regexp)).toEqual 4
