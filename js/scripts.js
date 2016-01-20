
var isPalindrome = function (word) {
  var wordLength = word.length;
  var lastChar = word.charAt(wordLength -1);
  if (lastChar !== word[0]) {
    return 'not a palindrome';
  } else if (lastChar === word[0]) {
      isEven(word)
    };
};

  function isEven(wordLength) {
    if (wordLength % 2 === 0) {
      return true;}
    else {
      return false;
      midPoint(word);
    };
  };

    function midPoint(word) {
      var wordLength = word.length;
      var middle = word[((wordLength-1)/2)];
      var preWord = word.slice(0, (middle - 1));
      var postWord = word.slice(0, (middle + 1));
      return word;
    }
