function isNice(arr){
  if (arr.length === 0) return false;
  return arr.every(num => arr.includes(num + 1) || arr.includes(num - 1))
  }