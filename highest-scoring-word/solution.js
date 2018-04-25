function high(x) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var wordScores = [];
  var highScore = 0;
  var stringOut = "";
  x = x.toLowerCase();
  var xArray = x.split(" ");
  for (var word in xArray) {
    wordScores[word]=0;
    for (var letter in xArray[word]) {
      if(alphabet.indexOf(xArray[word][letter]) >= 0)
        wordScores[word]+= alphabet.indexOf(xArray[word][letter])+1;
      }
    }
  for (var scores in xArray)
    if (wordScores[scores]>highScore)
    {
      highScore = wordScores[scores];
      stringOut = xArray[scores];
    }
    
  return stringOut;
}
