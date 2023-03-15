function convertToJSON(firstName, lastName, hairColor){
    let jsonObj = JSON.stringify({firstName, lastName, hairColor});
    console.log(jsonObj);
}
convertToJSON('George', 'Jones', 'Brown');