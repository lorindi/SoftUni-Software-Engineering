import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { MainNavigation } from "./components/MainNavigation";
import { CharactersList } from "./components/CharactersList";
import { Character } from "./components/Character";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavigation />
        <Routes>
          {/* Отваря 404, ако няма линк за url */}
          <Route path="*" element={<h1>404</h1>} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<CharactersList/>} />

          {/* Позволяваме на този линк да има и други след него ако не сме ги дефинирали официално */}
          <Route path="/characters/:characterId/*" element={<Character/>} />


        </Routes>
      </header>
    </div>
  );
}

export default App;
