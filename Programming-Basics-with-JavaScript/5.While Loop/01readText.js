function reads(input){
    let idx = 0
    let data = input[idx]
    idx++
    while (data !== 'Stop'){
        console.log(data)
        data = input[idx]
        idx++
    }
}
reads(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
