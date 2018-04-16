function capitalize(s){
  function upperCaseOdd (odd) {
    for (i=0; i < odd.length; i+=2) {
       odd = odd.substr(0, i) + odd[i].toUpperCase() + odd.substr(i + 1);
    }
    return odd; 
  }
  function upperCaseEven(even){
    for (i=1; i < even.length; i+=2) {
       even = even.substr(0, i) + even[i].toUpperCase() + even.substr(i + 1);
    }
    return even; 
  }
  return [upperCaseOdd(s),upperCaseEven(s)];
};