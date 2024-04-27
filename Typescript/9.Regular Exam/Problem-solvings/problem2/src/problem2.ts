interface City {
    name: string;
    population: number;
    treasury: number;
    taxRate: number;
    collectTaxes(): void;
    applyGrowth(percentage: number): void;
    applyRecession(percentage: number): void;
  }
  
  function cityTaxes(name: string, population: number, treasury: number): City {
    return {
      name: name,
      population: population,
      treasury: treasury,
      taxRate: 10,
  
      collectTaxes: function(): void {
        this.treasury += Math.floor(this.population * this.taxRate);
      },
  
      applyGrowth: function(percentage: number): void {
        this.population = Math.floor(this.population * (1 + percentage / 100));
      },
  
      applyRecession: function(percentage: number): void {
        this.treasury -= Math.floor(this.treasury * (percentage / 100));
      }
    };
  }

//   const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);
  
  const city: City = cityTaxes('Tortuga', 7000, 15000);
  city.collectTaxes();
  console.log(city.treasury);
  city.applyGrowth(5);
  console.log(city.population);

  
  
  