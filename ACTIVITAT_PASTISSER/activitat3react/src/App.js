import logo from './logo.svg';
import './App.css';
import EstructuraHeader from './components/Header';
import Carta from './components/Carta';

function App() {
  return (
    <div className="App">
      <EstructuraHeader></EstructuraHeader>
      <Carta />
      <Carta />
    </div>
  );
}

export default App;
