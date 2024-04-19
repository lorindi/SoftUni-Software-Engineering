type DataObject = {
    [key: string]: string | number;
};

// function task(list: string[]): void {
//     const data: object = {}
//     list.forEach((value, index) => {
//         if (index % 2 == 0){
//             data[value] = list[index + 1]
//         }
//     })
//     console.log(data);
    
    
// }
// task(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

function towns(list: string[]): void {
    const data: DataObject = {};
    list.forEach((value, index) => index % 2 === 0 ? data[value] = list[index + 1] : null);
    console.log(data);
}
towns(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
