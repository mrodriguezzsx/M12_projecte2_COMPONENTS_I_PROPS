import './App.css';

const integrants= {
  primerIntegrant: 'Matias',
  segonIntegrant: 'Mitchel'
}

function integrantName(integrants) {
  return integrants.primerIntegrant + " i " + integrants.segonIntegrant;
}

const element = (
  <div>
    <h1>Grup: Daw2</h1>
    <h2>Integrants: {integrantName(integrants)}</h2>
  </div>
)

function App() {
  return (
    element
  );
}



export default App;
