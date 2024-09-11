import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState, createContext} from 'react';
import {Home} from './pages/Home';
import { Profile } from './pages/Profile';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { PageNotFound } from './pages/PageNotFound'
import { Navbar } from './Navbar';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState("Lena Default");

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar/>
          <AppContext.Provider value={{username, setUsername}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="contact" element={<Contact />}>
                <Route path=":name"  element={<Contact />}/>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AppContext.Provider>
          <footer>footer goes here</footer>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
