import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [excuse, setExcuse] = useState('');

  const fetchExcuse = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res) => {
      setExcuse(res.data[0].excuse)
    })
  }

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <br/><br/>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <br/><br/>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <p>
        {excuse}
      </p>
    </div>
  );
}

export default App;
