function modernTimesOfHashTag(text) {
  let string = text.split(' ')
  
  for (let el of string){
    let isTrue = false 
    let result = 0
    if (el.includes('#')){
        let data = el.split('#')
        let first = data[0]
        let second = data[1]
        if (second.length > 0){
            for (let i = 0; i < second.length; i++){
                result = second.charCodeAt(i)
                if (result >= 65 && result <= 90 || result >= 97 && result <= 122){
                    isTrue = true;
                    


                }else {
                    break
                }
            }
            if (isTrue){
                console.log(second);
            }
            
            
        }

       
    }
  }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #4special word in #socialMedia')
