import './App.css';
import Navbar from './components/Navbar';
import PlayerSelector from './components/PlayerSelector';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PlayerSelector/>
      <Connect/>
    </div>
  );
}

export default App;
