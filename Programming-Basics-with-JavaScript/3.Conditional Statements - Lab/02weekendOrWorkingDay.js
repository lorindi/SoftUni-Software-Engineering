function weekendOrWorkingDay(input){
    let day = String(input[0])

    if (day === 'Monday'){
        console.log("Working day")
    } else if (day === 'Tuesday') {
        console.log("Working day")
    }else if (day === 'Wednesday') {
        console.log("Working day")
    }else if (day === 'Thursday') {
        console.log("Working day")
    }else if (day === 'Friday') {
        console.log("Working day")
    }else if (day === 'Saturday') {
        console.log("Weekend")
    }else if (day === 'Sunday') {
        console.log("Weekend")
    }else{
        console.log('Error')
    }
}
weekendOrWorkingDay(["Monday"])