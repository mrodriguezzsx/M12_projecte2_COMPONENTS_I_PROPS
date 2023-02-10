import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carta from './components/Carta';

function App() {
  return (
    <div className="App">
      <Header header="Activitat on hem de crear un component i passar diferents valors"/>
      <Carta name="Matias" treball="Pastisser" text="Lorem ipsum dolor sit amet."/>
      <Carta name="Mitchel" treball="Flequer" text="consectetur adipiscing elit."/>
    </div>
  );
}

export default App;
