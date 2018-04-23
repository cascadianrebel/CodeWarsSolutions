function find_average(array) {
  let sum = 0;
  for (var i in array){
  sum += array[i];
  }
  return sum/array.length;
}