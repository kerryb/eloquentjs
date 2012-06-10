describe "validInfo", ->
  beforeEach ->
    loadFixtures "form.html"
    window.form = document.forms.userinfo
    window.form.elements.name.value = "Fred"
    window.form.elements.email.value = "fred@example.com"

  it "returns false if the name field is empty", ->
    window.form.elements.name.value = ""
    expect(validInfo()).toBe false

  it "returns false if the email field is empty", ->
    window.form.elements.email.value = ""
    expect(validInfo()).toBe false

  it "returns false if the email field is invalid", ->
    # Let's just say no spaces and an @
    window.form.elements.email.value = "not-an-email-address"
    expect(validInfo()).toBe false

  it "returns true if the name is present and email is valid", ->
    window.form.elements.name.value = "Fred"
    window.form.elements.email.value = "fred@example.com"
    expect(validInfo()).toBe true
