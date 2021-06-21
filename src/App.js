import logo from './logo.svg';
import './App.css';
import document from './document.json'
import { wrapDocument } from '@govtechsg/open-attestation'
import util from 'util'

function App() {
  const wrappedDocument = wrapDocument(document);

  console.log(util.inspect(wrappedDocument, { showHidden: false, depth: null }));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
