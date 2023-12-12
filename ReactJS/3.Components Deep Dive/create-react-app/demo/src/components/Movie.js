import { useEffect } from "react";
export default function Movie({
  id,
  title,
  year,
  plot,
  posterUrl,
  director,
  onMovieDelete = { onMovieDelete },
}) {
  useEffect(() => {
    console.log(`Movie ${title}-mounted!`);
  }, []);
  //   Никога не използвам useEffect()
  //  без да подадем масив след това, винаги - useEffect(() => {}, [])
  // Този масив [] означава, искам да следиш определени промени, и само когато се случат тези промени,
  // искам да изпълниш тези промени искам да изпулниш това вътре - демек ейто това 'console.log(`Movie ${title}-mounted!`);'
  // Ако подадем празен масив както в нашият пример по горе, означава няма да следя никакви промени, искам да го изпълниш само
  // веднъж - първият път когато се mounted, искам да изпълниш този ефект и повече никога да не го изпълняваш за целият живот на компонентът.
  // Тоест когато се mounted ще се изпълни,когато се update или unmounted няма да се изпълни.
  return (
    <article>
      <h3>
        {title} {year}
      </h3>
      <main>
        <img src={posterUrl} alt={title} />
        <p>{plot}</p>
      </main>
      <footer>
        <p>Director: {director}</p>
        <button onClick={() => onMovieDelete(id)}>Delete</button>
      </footer>
    </article>
  );
}

// 2:12
