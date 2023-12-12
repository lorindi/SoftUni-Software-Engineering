import Logo from './components/Logo'
import Paragraph from './components/Paragraph'
import Link from './components/Link'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Paragraph />
        <Link />
      </header>
    </div>
  );
}

export default App;
