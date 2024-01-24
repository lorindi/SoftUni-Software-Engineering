function penalty(input){
    let n = Number(input[0])
    let salary = Number(input[1])
    for (let i = 2; i <= n + 2; i++){
        let openSite = input[i]
        if (openSite == 'Facebook'){
            salary -= 150
        }else if (openSite == 'Instagram'){
            salary -= 100
        }else if (openSite == 'Reddit'){
            salary -= 50
        }
    }
    if (salary <= 0){
        console.log("You have lost your salary.")
    }else {
        console.log(salary)
    }
}
penalty(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])


