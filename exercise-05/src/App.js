import './App.css';
import {useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }

  return (
    <div className="App">
     <input type="text" onChange={handleInputChange}/>
     {inputValue}
    </div>
  );
}

export default App;
