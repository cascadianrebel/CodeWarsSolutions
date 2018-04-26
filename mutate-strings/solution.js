function mutateMyStrings(stringarrayOne, stringarrayTwo){
  let arrayOne = stringarrayOne.split('');
  let arrayTwo = stringarrayTwo.split('');
  let newString = (stringarrayOne + '\n');

  for (var i in arrayOne) {
    if (arrayOne[i] !== arrayTwo[i]) {
      arrayOne[i] = arrayTwo[i];
      newString = newString.concat(arrayOne.join('') + '\n');
    }
  }
  return newString;
}