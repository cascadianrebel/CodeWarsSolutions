function abbrevName(name){
  var nameSplits = name.split(' ');
  return `${nameSplits[0].substring(0,1).toUpperCase()}.${nameSplits[1].substring(0,1).toUpperCase()}`;
}
