
var isPalindrome = function (word) {
  var wordLength = word.length;
  var lastChar = word.charAt(wordLength -1);
  if (lastChar !== word[0]) {
    return 'not a palindrome';
  }
};
