import Movie from "./Movie";
// import React from "react";
export default function MovieList({ movies, onMovieDelete }) {
  // 1.Първи вариант визуализиране на информация от movies.js - ГРЕШЕН
  //   const firstMovie = movies[0];
  //   return (
  //     <Movie
  //       title={firstMovie.title}
  //       year={firstMovie.year}
  //       plot={firstMovie.plot}
  //       posterUrl={firstMovie.posterUrl}
  //       director={firstMovie.director}
  //     />
  //   );

  // 2.Втори вариант визуализиране на информация от movies.js - ГРЕШЕН
  //   const firstMovie = movies[0];
  //   return <Movie {...firstMovie} />;

  // 3.Трети вариант - ГРЕШЕН
  // return [
  //     <Movie {...movies[0]} />,
  //     <Movie {...movies[1]} />,
  //     <Movie {...movies[2]} />,
  // ];

  // 4.Четвърти вариант - Грозен начин!
  //   const movieElements = [];
  //   for (const movie of movies) {
  // movieElement.push(React.createElement(Movie, movie));
  // По реактски начин:
  //     movieElements.push(<li><Movie {...movie} /></li>);
  //   }
  //   return movieElement; или:
  //   return (
  //     <ul>
  //         {movieElements}
  //     </ul>
  //   )

  // 5.Пети вариант - ЩЕ ИЗПОЛЗВАМЕ.
  //   Появява грешка : Warning: Each child in a list should have a unique "key" prop.
  // Тази грешка се появява, защото ако се направи промена в даден елемент от реактското дърво, и този елемент няма уникален key,
  // на реакт му е трудно да го проследи и дефакто не може да направи промяната на даденият елемент в дървото без уникален ключ.
  //   "key=''" винаги се поставя на елементът в който е елементът, който ще се визуализира

  //   let movieList = movies.map((movie) => (
  //     <li>
  //       <Movie {...movie} />
  //     </li>
  //   ));
  return (
    <ul>
      {/* {movieList} */}
      {/* Или */}
      {/* Добър варянт ако има id*/}
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie {...movie} onMovieDelete={onMovieDelete} />
        </li>
      ))}
      {/* Или */}
      {/* Добър варянт, ако всички имена са уникални */}
      {/* {movies.map((movie) => (
        <li key={movie.name}>
          <Movie {...movie} />
        </li>
      ))} */}
      {/* Или */}
      {/* Не се препоръчва защото след време, ако тези елементи в главният обект се сортират, например по име,индексите вече ще се променят а реакт би трябвало даде грешка. */}
      {/* {movies.map((movie, index) => (
        <li key={index}>
          <Movie {...movie} />
        </li>
      ))} */}
    </ul>
  );
}
