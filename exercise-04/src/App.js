import './App.css';
import {planets} from './planets';
import {Planet} from './Planet';

function App() {
    return (
      <div className="App">
        {planets.map(({name, isGasPlanet}) => 
          (isGasPlanet && <Planet name={name}/>)
          )}
      </div>
    );
}

export default App;
