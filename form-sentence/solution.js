function formatWords(words){
  let wordsArray = [];
    if (words === null){
    return '';
    }
      for(let k = 0; k < words.length; k++){
       if(words[k] !== ''){
         wordsArray.push(words[k]);
        }
      }
    if (wordsArray.length === 1){
      return wordsArray.toString();
      }
    else if (wordsArray.length === 0){
      return '';
    }
    else {
    let lastWord = wordsArray.pop();
    return wordsArray.join(', ')+' and '+lastWord;
    }
}