function elementFromAnArray(list, element) {
    let elements = []
  for (let i = 0; i < list.length; i += element) {
    elements.push(list[i]);
  }
  return elements
}
elementFromAnArray(['1', 
'2',
'3', 
'4', 
'5'], 
6);
