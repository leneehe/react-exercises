import './App.css';

function App() {
  const names = ['Lena', 'Kate', 'Jake', 'Jessica', 'Mike', 'Dustin'];

    return (
      <div className="App">
        {names.map((name) => <h1>{name}</h1>)}
      </div>
    );

}

export default App;
