import { WalletContext, WalletProvider } from '@viaprotocol/web3-wallets';
import { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import NestedComponent from './components/walletconnector.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/emailform.js';

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

            <WalletProvider>
              <NestedComponent />
            </WalletProvider>

            
        </div>
    );
};

export default App;