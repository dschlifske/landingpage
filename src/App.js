import logo from './ancala health logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Ancala Health"  />
        <p>
          Click <code>Login</code> to get started.
        </p>
        <a
          className="App-link"
          href="https://master.d9tjbwapov1ny.amplifyapp.com/"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default App;
