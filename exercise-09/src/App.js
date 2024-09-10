import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react';
import {Home} from './pages/Home';
import { Profile } from './pages/Profile';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { PageNotFound } from './pages/PageNotFound'
import { Navbar } from './Navbar';


function App() {
  const [username, setUsername] = useState("Lena Default");

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/profile" element={<Profile  username={username} setUsername={setUsername}/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="contact" element={<Contact />}>
            <Route path=":name"  element={<Contact />}/>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <footer>footer goes here</footer>
      </Router>
    </div>
  );
}

export default App;
