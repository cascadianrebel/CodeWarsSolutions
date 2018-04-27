function capitalize(s,arr){

  let sArr = s.split('');
  
    for (var i in arr) {
  
      if (sArr[arr[i]]) {
  
      sArr[arr[i]] = sArr[arr[i]].toUpperCase();
  
     }
  
    }
     return sArr.join('');
  }