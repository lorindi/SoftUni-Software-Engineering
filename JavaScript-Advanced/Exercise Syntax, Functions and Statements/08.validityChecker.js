function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  
  function isValidDistance(x1, y1, x2, y2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return Number.isInteger(distance);
  }
  
  function checkAndPrintValidity(x1, y1, x2, y2) {
    const firstToOrigin = isValidDistance(x1, y1, 0, 0);
    const secondToOrigin = isValidDistance(x2, y2, 0, 0);
    const firstToSecond = isValidDistance(x1, y1, x2, y2);
  
    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstToOrigin ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondToOrigin ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${firstToSecond ? "valid" : "invalid"}`);
  }
  
  // Example usage
  checkAndPrintValidity(2, 1, 1, 1);

  