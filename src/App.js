import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import {BrowserRouter as Router, Routes , Route ,Link} from 'react-router-dom'
import Contact from './pages/contac';

function App() {
  return (    
    <div className="App">
      <Router>
        <Route path="/contacto" element={Contact} />
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name='cris' message='probando probando' />
      </header>
    </div>
  );
}

export default App;
