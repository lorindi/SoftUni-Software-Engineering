function task(list) {
  list.sort().forEach((item,index) => {
    console.log(`${index + 1}.${item}`);
    
  })

}

task(["Potatoes", "Tomatoes", "Onions", "Apples"]);
