function oscars(input) {
    let name = input[0];
    let points = Number(input[1]);
    let juryCount = Number(input[2]);
    let winningPoints = 1250.5;
    
    for(let i = 3; i <= (juryCount + 1) * 2; i += 2) {
      points += (input[i].length * Number(input[i + 1]) / 2);
      
      if(points >= winningPoints) {
        let result = `Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`;
        console.log(result);
        break;
      }
    }
    
    if(points < winningPoints) {
      let result = `Sorry, ${name} you need ${(winningPoints - points).toFixed(1)} more!`;
      console.log(result);
    }
  }
  oscars(["Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39"])
