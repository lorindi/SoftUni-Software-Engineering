function city(cityObject) {
    for (const [key, value] of Object.entries(cityObject)){
        console.log(`${key} -> ${value}`);
    }

    
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})