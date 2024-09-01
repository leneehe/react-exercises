import './App.css';
import {useState} from 'react';

function App() {
  const [textColor, setTextColor] = useState("red");

  return (
    <div className="App">
      <button onClick={() => {
        setTextColor(textColor ==="red" ? "green" : "red")
      }}>Change color</button>
     <h1 style={{color: textColor}}>Hi My name is Lena</h1>
    </div>
  );
}

export default App;
