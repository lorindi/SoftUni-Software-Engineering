function cityTaxes(name, population, treasury){
    const cityObject = {
        name: name,
        population: population, 
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;

        },
        applyGrowth(percentage) {
            this.percentage += this.population * (percentage / 100)

        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * (percentage / 100);


        }
    }
    return cityObject

}
console.log(cityTaxes('Tortuga',
7000,
15000))