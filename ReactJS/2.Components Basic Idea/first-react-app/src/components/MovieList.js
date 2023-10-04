import Movie from "./Movie"
export default function MovieList(props) {
    console.log("Render MovieList");
    return (
        <div>
      <h1>Movie List</h1>
      <Movie
        title={props.movies[0].title}
        year={props.movies[0].year}
        cast={props.movies[0].cast}
      />
      <Movie
        title={props.movies[1].title}
        year={props.movies[1].year}
        cast={props.movies[1].cast}
      />
      <Movie
        title={props.movies[2].title}
        year={props.movies[2].year}
        cast={props.movies[2].cast}
      />
    </div>
    )

}