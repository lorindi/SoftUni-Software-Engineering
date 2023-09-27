import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Eventinfo from "./components/Eventinfo";
import Speakers from "./components/Speakers";
import Tickets from "./components/Tickets";
import Schedule from "./components/Schedule";
import Footer from "../src/components/Footer";
function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <div class="container">
        <Eventinfo />

        <Speakers />
      </div>
      <Tickets />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
