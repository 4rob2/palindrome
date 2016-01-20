describe('isPalindrome', function(){
  it('should compare first and last character', function (){
    expect(isPalindrome("pale")).to.equal('not a palindrome');
  });
});

describe("isEven", function (){
  it("should count and determine if even without a midpoint that needs to be excluded", function () {
    expect(isEven("kayak")).to.equal (false)
  });
});

describe("midPoint", function (){
  it ("should obtain and remove middle value of array",
  function () {
    expect(midPoint("kayak")).to.equal("kaak")
  });
});
