function movies(array){
    let objInfo = {}

    for (let i = 0; i < array.length; i++){
        if ((array[i]).includes('addMovie')){
            let nameFilm = array[i].slice(9)
            if (!(objInfo.hasOwnProperty(nameFilm))){
                objInfo[nameFilm] = {}
                objInfo[nameFilm]['name'] = nameFilm
            }
        }else if ((array[i]).includes('directedBy')){
            let [movieName, director] = array[i].split(' directedBy ')
            if (objInfo.hasOwnProperty(movieName)){
                objInfo[movieName]['director'] = director

            }
         

        }else if ((array[i]).includes('onDate')){
            let [nameMovie, dateMovie] =  array[i].split(' onDate ')
            if (objInfo.hasOwnProperty(nameMovie)){
                objInfo[nameMovie]['date'] = dateMovie

            }
 
        

        }
    }
    const validMovie = Object.values(objInfo).filter(el => el.date && el.director && el.name);
    validMovie.forEach(el => console.log(JSON.stringify(el)))
    // for (const key in arrayInfo){
    //     if (arrayInfo[key].hasOwnProperty('name') && arrayInfo[key].hasOwnProperty('director') && arrayInfo[key].hasOwnProperty('date')){
    //         console.log(arrayInfo[key]);

    //     }
        

    // }
   
  

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])


// function storeMoviesInfo(moviesInput) {
//     const movies = {};
  
//     for (let input of moviesInput) {
//       if (input.startsWith('addMovie ')) {
//         const movieName = input.substring(9);
//         movies[movieName] = {name: movieName};
//       } else if (input.includes(' directedBy ')) {
//         const [movieName, director] = input.split(' directedBy ');
//         if (movies.hasOwnProperty(movieName)) {
//           movies[movieName].director = director;
//         }
//       } else if (input.includes(' onDate ')) {
//         const [movieName, date] = input.split(' onDate ');
//         if (movies.hasOwnProperty(movieName)) {
//           movies[movieName].date = date;
//         }
//       }
//     }
  
//     const validMovies = Object.values(movies).filter(movie => movie.name && movie.director && movie.date);
//     validMovies.forEach(movie => console.log(JSON.stringify(movie)));
//   }
//   storeMoviesInfo([
//         'addMovie Fast and Furious',
//         'addMovie Godfather',
//         'Inception directedBy Christopher Nolan',
//         'Godfather directedBy Francis Ford Coppola',
//         'Godfather onDate 29.07.2018',
//         'Fast and Furious onDate 30.07.2018',
//         'Batman onDate 01.08.2018',
//         'Fast and Furious directedBy Rob Cohen'
//         ])
  