describe "validInfo", ->
  form = null

  beforeEach ->
    loadFixtures "form.html"
    form = document.forms.userinfo
    form.elements.name.value = "Fred"
    form.elements.email.value = "fred@example.com"

  it "returns false if the name field is empty", ->
    form.elements.name.value = ""
    expect(validInfo()).toBe false

  it "returns false if the email field is empty", ->
    form.elements.email.value = ""
    expect(validInfo()).toBe false

  it "returns false if the email field is invalid", ->
    # Let's just say no spaces and an @
    form.elements.email.value = "not-an-email-address"
    expect(validInfo()).toBe false

  it "returns true if the name is present and email is valid", ->
    expect(validInfo()).toBe true
