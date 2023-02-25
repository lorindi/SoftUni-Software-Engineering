function sumDigits(nums){
    let sum = 0
    nums = String(nums)
    for (const el of nums) {
        sum += Number(el)

    }
    console.log(sum)

}
sumDigits(245678)