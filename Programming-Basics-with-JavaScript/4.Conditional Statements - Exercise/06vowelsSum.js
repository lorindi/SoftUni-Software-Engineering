// a	e	i	o	u
// 1	2	3	4	5
function vowelsSum(input){
    let data = String(input[0])
    let result = 0
    for (let i = 0; i < data.length; i++){
        
        if (data[i] == 'a'){
            result += 1
        }else if (data[i] == 'e'){
            result += 2
        }else if (data[i] == 'i'){
            result += 3
        }else if (data[i] == 'o'){
            result += 4
        }else if (data[i] == 'u'){
            result += 5
        }
    }
    console.log(result)
}
vowelsSum(["hello"])