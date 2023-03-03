function charactersInRange(first, second){
    let list = []
    
    if (first.charCodeAt() > second.charCodeAt()){
        for (let el = second.charCodeAt() + 1; el < first.charCodeAt(); el++){
            list.push(el);
        }

    } else { 
        for (let el = first.charCodeAt() + 1; el < second.charCodeAt(); el++){
            list.push(el);
        
        }
    }
    let result = list.map(el => String.fromCharCode(el)).join(' ')
    
    console.log(result);
}
charactersInRange('C',
'#')


function charactersInRange(first, second) {
    let list = [];
    let start = first.charCodeAt();
    let end = second.charCodeAt();
  
    // Проверка дали start е по-голямо от end, за да определим коя е по-голямата стойност
    if (start > end) [start, end] = [end, start];
  
    // Обхождане на елементите в дадения диапазон и добавяне на техните стойности в масива
    for (let el = start + 1; el < end; el++) {
      list.push(el);
    }
  
    // Преобразуване на стойностите в масива от числови кодове на символи в символи и сливане на тези символи в един низ
    let result = list.map((el) => String.fromCharCode(el)).join(" ");
  
    console.log(result);
  }
charactersInRange('C',
'#')