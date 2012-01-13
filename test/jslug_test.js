describe("jslug", function() {
  it("converts regular string to slug", function() {
    expect("Regular Test String".slug()).toEqual("regular-test-string");
  });

  it("converts string with diacritics to slug", function() {
    expect("ZaŻóŁć GęŚlĄ jAźŃ".slug()).toEqual("zazolc-gesla-jazn");
  });

  it("converts string and discards invalid characters", function() {
    expect("†est".slug()).toEqual("-est");
  });

  it("strips leading and trailing space", function() {
    expect(" regular test string ".slug()).toEqual("regular-test-string");
  });

  it("allows a single space", function() {
    expect("regular  test  string".slug()).toEqual("regular-test-string");
  })
});