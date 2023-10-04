import "./App.css";
// import Movie from "../src/components/Movie";
import MovieList from "./components/MovieList";
import Timer from "./components/Timer";
import Counter from "./components/Counter";

function App() {
  const movies = [
    {
      title: "Man of Steel",
      year: 2008,
      cast: ["Henry Cavil", "Russell Crowe"],
    },
    {
      title: "Harry Potter",
      year: 2008,
      cast: ["Daniel Radcliffe", "Emma Watson"],
    },
    {
      title: "Lord of the Rings",
      year: 2008,
      cast: ["Orlando Bloom"],
    },
  ];
  // console.log("App render");

  return (
    <div className="App">
      {/* <h1>Movie List</h1> */}
      {/* <Movie
        // title="Man of Steel"
        // year="2008"
        // cast={["Henry Cavil", "Pesho"]}
        // // isNew = {false}
        // isNew
        title={movies[0].title}
        year={movies[0].year}
        cast={movies[0].cast}
      />
      <Movie
        title={movies[1].title}
        year={movies[1].year}
        cast={movies[1].cast}
      />
      <Movie
        title={movies[2].title}
        year={movies[2].year}
        cast={movies[2].cast}
      /> */}
      <h1>React Demo</h1>

      <Counter canReset/>

      <Timer start={0}/>
      
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
