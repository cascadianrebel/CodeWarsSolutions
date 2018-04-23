function filter_list(l) {
  return l.filter(listItem => typeof listItem === 'number');
}
