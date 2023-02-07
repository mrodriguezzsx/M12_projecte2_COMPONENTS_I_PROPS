import './App.css';

const Integrants = () => {
  return (
    <div>
      <h1>Grup: Daw2</h1>
      <h2>Matias Rodriguez</h2>
      <h2>Mitchel Rosado</h2>
    </div>
  )
}

const Text_Info = () => {
  return (
    <div>
      <label for="fname">Nom: </label>
      <input type="text" id="fname" name="fname" placeholder="Escriu el teu nom complet"></input><br></br>
      <br></br>
      <label for="sexe">Sexe: </label>
      <input type="text" id="sexe" name="sexe" placeholder="Escriu el teu sexe (M/F)"></input><br></br>
      <br></br>
      <label for="edat">Edat: </label>
      <input type="text" id="edat" name="edat" placeholder="Escriu la teva edat"></input><br></br>
    </div>
  )
} 

function App() {
  return (
    <div className="App">
      <Integrants />
      <Text_Info />
    </div>
  );
}



export default App;
