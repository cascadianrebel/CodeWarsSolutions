function insertDash(num) {
  var arrayNum = num.toString().split('');
  for (var i = 0; i < arrayNum.length; ++i) { 
      if ((arrayNum[i] % 2) === 1 && (arrayNum[i+1] %2) === 1) {
        arrayNum.splice(i+1,0, '-');
      }
  }
  return arrayNum.toString().replace(/,/g,'');
  }