import { useSelector } from "react-redux"
import MainPage from './components/MainPage'


function App() {
  let test = useSelector((state) => { return state } )
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
        <h2>지홍 왔다감</h2>
        <h2>Test</h2>
      </header>
    </div>
  );
}

export default App;
