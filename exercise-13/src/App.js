import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name="Lena" age={35} email="lena@reacttest.com" isMarried={false} friends={["Predro", "Janet", "Richard", "Polka", "Ping"]} />
    </div>
  );
}

export default App;
