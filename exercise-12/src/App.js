import './App.css';
import { useCounter } from './useCounter';

function App() {
  const {count, increaseCount, decreaseCount, resetCount} = useCounter(0)
  const {count:c1, increaseCount:increase, decreaseCount:decrease, resetCount:reset} = useCounter(5)

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={resetCount}>restart</button>

      <p>{c1}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>restart</button>
    </div>
  );
}

export default App;
