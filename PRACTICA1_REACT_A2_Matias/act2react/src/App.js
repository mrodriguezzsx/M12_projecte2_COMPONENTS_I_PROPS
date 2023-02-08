import logo from './logo.svg';
import './App.css';

const Grup = (props) => {
  return (
    <div>
      <h1>Grup: {props.grup}</h1>
    </div>
  );
}

const Integrants = (props) => {
  return (
    <div>
      <h2>{props.name} {props.age} </h2>
    </div>
  );
}

const Text_Info = () => {
  return (
    <div>
      <input type="text" id="fname" name="fname" placeholder="Escriu el teu nom"></input><br></br>
      <input type="text" id="sname" name="sname" placeholder="Escriu el teu cognom"></input><br></br>
      <input type="text" id="edad" name="edad" placeholder="Escriu la teva edad"></input><br></br>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Grup grup="Daw2"/>
      <Integrants name="Matias Rodriguez" age={20}/>
      <Integrants name="Mitchel Rosado" age={24}/>
      <Text_Info/>
    </div>
  );
}

export default App;
