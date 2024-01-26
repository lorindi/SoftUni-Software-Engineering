// function passwords(input){
//     let urerName = input[0]
//     let password = input[1]
//     let data = input[2]
//     let idx = 3
//     while (data !== password){
        
//         data = input[idx]
//         idx++

//     }
//     console.log(`Welcome ${urerName}!`)

// }
// passwords(["Nakov",
// "1234",
// "Pass",
// "1324",
// "1234"])
function passwords(input){
    let idx = 0 
    let urerName = input[idx]
    idx++
    let password = input[idx]
    idx++
    let data = input[idx]
    idx++
    while (data !== password){
        
        data = input[idx]
        idx++

    }
    console.log(`Welcome ${urerName}!`)

}
passwords(["Nakov",
"1234",
"Pass",
"1324",
"1234"])