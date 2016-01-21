
$(function(){
  $("form#word-group").submit(function(event) {



  // var isPalindrome = function (word) {
    var word = $("input#word").val();
    var preWord = [];
    var postWord = [];

    alert(word);

    var compareLast = function(word) {
      var wordLength = word.length;
      var lastChar = word.charAt(wordLength -1);
      if (lastChar !== word[0]) {
        $("#results").empty().append("not a palindrome");
        $("#nextinput").show();
      } else if (lastChar === word[0]); {
          isEven(word);
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
        var preWord = word.slice(0, (word.indexOf(middle)));
        var postWord = word.slice((word.indexOf(middle) + 1), wordLength);
        return postWord;
      };

      function finalTest(word) {
        if (preWord === postWord) {
        return ("this is a palindrome");
      } else {
        return ("this is not a palindrome")
      };

    };
  // };

  event.preventDefault();
});
});
