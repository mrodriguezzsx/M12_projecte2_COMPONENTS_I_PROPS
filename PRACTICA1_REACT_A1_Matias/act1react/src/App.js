import './App.css';

const integrants= {
  primerIntegrant: 'Matias',
  segonIntegrant: 'Mitchel'
}

function integrantName(integrants) {
  return integrants.primerIntegrant + " i " + integrants.segonIntegrant;
}

function App() {
  return (
    <div>
    <h1>Grup: Daw2</h1>
    <h2>Integrants: {integrantName(integrants)}</h2>
    <label for="fname">Nom:</label>
    <input type="text" id="fname" name="fname" placeholder="Escriu el teu nom complet"></input><br></br>
    <br></br>
    <label for="sexe">Sexe:</label>
    <input type="text" id="sexe" name="sexe" placeholder="Escriu el teu sexe (M/F)"></input><br></br>
    <br></br>
    <label for="edat">Edat:</label>
    <input type="text" id="edat" name="edat" placeholder="Escriu la teva edat"></input><br></br>
  </div>
  );
}



export default App;
