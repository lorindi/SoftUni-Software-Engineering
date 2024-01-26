function invalidNumber(input){
    let number = Number(input[0]);
    if (number >= 100 && number <= 200 || number == 0) {
        console.log('')
    }else{
        console.log('invalid')
    }

}
invalidNumber(["199"])

