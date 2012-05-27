describe "escapeHTML", ->
  it "doesn't change strings with no special characters", ->
    expect(escapeHTML("A boring string")).toEqual "A boring string"

  it "escapes special characters", ->
    expect(escapeHTML('A "string" with <angle brackets> & stuff')).toEqual \
      "A &quot;string&quot; with &lt;angle brackets&gt; &amp; stuff"
