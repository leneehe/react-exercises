import './App.css';
import { useToggle } from './useToggle';

function App() {
  const [isVisible, setIsVisible] = useToggle(false)
  const [isVisible2, toggle] = useToggle()
  return (
    <div className="App">
      <button onClick={setIsVisible}>   
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden text</h1>}

      <button onClick={toggle}>   
        {isVisible2 ? "Hide" : "Show"}
      </button>
      {isVisible2 && <h1>Hidden text</h1>}
    </div>
  );
}

export default App;
