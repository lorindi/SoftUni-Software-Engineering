function townPopulation(list: string[]): void {

    for(let line of list){
        const [town, population] = line.split(' <-> ')
        console.log(`${town} : ${population}`);
        

    }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
