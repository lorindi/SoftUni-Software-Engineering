function formatGrade(grade){
    let result = '';
    let isTrue = false

    if (grade < 3.00){
        
        result = 'Fail';
        isTrue = true

    }else if (grade >= 3.00 && grade < 3.50){
        result = 'Poor';

    }else if (grade >= 3.50 && grade < 4.50){
        result = 'Good';
        
    }else if (grade >= 4.50 && grade < 5.50){
        result = 'Very good';
        
    }else if (grade >= 5.50 ){
        result = 'Excellent';
        
    }
    if (isTrue){
        grade = Math.floor(grade)
        console.log(`${result} (${grade})`);

    } else {
        console.log(`${result} (${(grade).toFixed(2)})`);

    }
    

}
formatGrade(2.99)