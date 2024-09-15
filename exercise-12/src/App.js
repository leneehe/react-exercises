import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count -1);
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={resetCount}>restart</button>
    </div>
  );
}

export default App;
