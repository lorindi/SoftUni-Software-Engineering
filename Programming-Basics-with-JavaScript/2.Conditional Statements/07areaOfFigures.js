function  areaFigures(input){
    
    let type = String(input[0])
    
    if (type === 'square'){
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));
    } else if (type === 'rectangle'){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));
    } else if (type === 'circle'){
        let r = Number(input[1]);
        let area = Math.PI * r * r
        console.log(area.toFixed(3));
    } else if (type === 'triangle'){
        let a = Number(input[1]);
        let h = Number(input[2]);
        let area = a * h /2
        console.log(area.toFixed(3));
    }
}
areaFigures(["triangle",
"4.5",
"20"])
