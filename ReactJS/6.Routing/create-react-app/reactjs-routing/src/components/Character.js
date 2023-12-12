import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import styles from "./Navigation.module.css";
import { CharacterFilms } from "./CharacterFilms";
import { Navigation } from "./Navigation";
import { NavItem } from "./Navigation";

export const Character = () => {
  const baseUrl = "https://swapi.dev/api/people";
  const navigate = useNavigate();
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`${baseUrl}/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [characterId]);

  const onBackButtonClick = () => {
    navigate(`/characters`);

    // Върни се на предната страница на която си бил
    // navigate(-1);
  };

  return (
    <>
      <h1>Character Page</h1>
      <p>{character.name}</p>
      <button onClick={onBackButtonClick}>Back</button>

      <Navigation>
        <NavItem to="films">Films</NavItem>
        <NavItem to="vehicles">Vehicles</NavItem>
        <NavItem to="starship">Starship</NavItem>
      </Navigation>
      <Routes>
        <Route path="/films" element={<CharacterFilms />} />
        <Route path="/vehicles" element={<h5>Vehicles</h5>} />
        <Route path="/starship" element={<h5>Starship</h5>} />
      </Routes>
    </>
  );
};
