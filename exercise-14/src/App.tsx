import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {Login} from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/contact"> Contact </Link>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
