import { HeroLayout3 } from './ui-components';
import { Features2x2 } from './ui-components';
import logo from './ancala health logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
  return (
    <AmplifyProvider>
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} alt="Ancala Health"  />*/}
        <h1>Ancala Health</h1>
        <HeroLayout3 />
        <p />
        <Features2x2 />
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
    </AmplifyProvider>
  );
}

export default App;
