
function task(list) {
   console.log(list.sort((a,b)=> a - b).splice(0,2).join(' '));
   
    
}

task([30, 15, 50, 5])