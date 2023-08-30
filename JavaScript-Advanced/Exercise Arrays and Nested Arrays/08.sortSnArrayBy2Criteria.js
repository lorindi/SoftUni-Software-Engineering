function sortSnArrayBy2Criteria(array){
    let sorted = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join(' \n'));
}
sortSnArrayBy2Criteria(['alpha', 
'beta', 
'gamma'])


  