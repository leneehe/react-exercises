import './App.css';
import { Person, Country } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name="Lena" age={35} email="lena@react.com" isMarried={false} friends={["Ping", "Polka", "Mason", "Richard"]} country={Country.canada}/>
    </div>
  );
}

export default App;
