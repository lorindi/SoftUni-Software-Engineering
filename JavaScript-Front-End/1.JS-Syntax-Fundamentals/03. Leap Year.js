function leapYear(nums){
    if (nums % 4 == 0 && nums % 100 != 0 || nums % 400 == 0) {
        console.log('yes');
    } else {
        console.log('no');
    }

}
leapYear(4)