describe "extract_date", ->
  it "can extract a date in the format DD/MM/YYYY", ->
    expect(extract_date("I was born on 17/11/1969, you know")).toEqual new Date(1969, 10, 17)

  it "can extract a date in the format D/MM/YYYY", ->
    expect(extract_date("On 1/12/2012 you can start opening your advent calendar")).toEqual new Date(2012, 11, 1)

  it "can extract a date in the format DD/M/YYYY", ->
    expect(extract_date("We had 29/2/2012 because it's a leap year")).toEqual new Date(2012, 1, 29)

  it "can extract a date in the format D/M/YYYY", ->
    expect(extract_date("New year will be on 1/1/2013 (as usual)")).toEqual new Date(2013, 0, 1)

  it "throws an exception if it doesn't find a date", ->
    expect( -> extract_date("No dates here") ).toThrow "No dates found"
