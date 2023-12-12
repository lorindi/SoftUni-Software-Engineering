import { useEffect, useState } from "react";
import { CharacterListItem } from "./CharacterListItem";
const baseUrl = "https://swapi.dev/api/people";

export const CharactersList = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);
  return (
    <>
      <h1>Star Wars Characters</h1>

      <ul>
        {characters ? (
          characters.map(x =><CharacterListItem key={x.url} {...x}/>)
        ) : (
          <p>Loading...</p>
        )}
        {/* {characters.map(x =><CharacterListItem key={x.url} {...x}/>)} */}
      </ul>
    </>
  );
};
