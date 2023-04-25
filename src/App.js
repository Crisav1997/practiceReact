import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Routes , Route ,Link} from 'react-router-dom'
import Contact from './pages/contac';

function App() {
  return (    
    <div>
          <NavBar />
        <Welcome name='cris' message='probando probando' /> 
      
    </div>
  );
}

export default App;
