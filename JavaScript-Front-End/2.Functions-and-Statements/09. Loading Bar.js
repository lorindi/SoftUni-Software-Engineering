function loadingBar(num){
    if (num === 100){
        console.log(`100% Complete!`);

    }else {
        console.log(`${num}% [${'%'.repeat(num / 10)}${'.'.repeat(10 - num / 10)}]`);
        console.log(`Still loading...`)
    }

}
loadingBar(50)