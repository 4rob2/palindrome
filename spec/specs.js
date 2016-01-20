describe('compareLast', function(){
  it('should compare first and last character', function (){
    expect(compareLast("pale")).to.equal('not a palindrome');
  });
});

describe("isEven", function (){
  it("should count and determine if even without a midpoint that needs to be excluded", function () {
    expect(isEven("kayak")).to.equal (false)
  });
});

describe("midPoint", function (){
  it ("should obtain and remove middle value of array, leaving the last half",
  function () {
    expect(midPoint("kayak")).to.equal("ak")
  });
});

describe("finalTest", function (){
  it ("should obtain and remove middle value of array, leaving the last half",
  function () {
    expect(finalTest("kayak")).to.equal("this is a palindrome")
  });
});
