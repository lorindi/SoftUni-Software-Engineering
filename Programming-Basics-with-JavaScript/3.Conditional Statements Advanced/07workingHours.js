function workingHours(input){
    let hour = Number(input[0])
    let day = String(input[1])

    if (hour >= 10 && hour <= 18 && day === 'Monday' | day === 'Tuesday' | day === 'Wednesday' | day === 'Thursday' | day === 'Friday' | day ==='Saturday'){
        console.log('open')
    }else{
        console.log('closed')
    }
}
workingHours(["19",
"Friday"])

