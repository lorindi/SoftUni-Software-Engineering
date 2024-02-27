function flattenLists(input) {
    let line = input.join("").split("|");
    let subLists = [];
  
    for (let subString of line.reverse()) {
        for (let el of subString){
            if (el != ' ' && el != '' ){
                subLists.push(el)
            }
        }
    }
    console.log(subLists.join(' '));
  }
  
  flattenLists(["7 | 4  5|1 0| 2 5 |3"]);
  
// В случая с Python, когато работите с низове,
// имате възможността да използвате split() директно,
// докато в JavaScript е необходимо да използвате join(""),
// за да съчетаете елементите на масива в един низ,
// преди да използвате split() за разделяне на него.
