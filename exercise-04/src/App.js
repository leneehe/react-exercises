import './App.css';
import {User} from './User'

function App() {
  const users = [{name:'Lena', age: 31}, {name:'Kate', age: 25}, {name:'Jake', age: 33}, {name:'Jessica', age: 45}, {name:'Dustin', age: 21}];

    return (
      <div className="App">
        {users.map(({name, age}, key) => {
          return <User key={key} name={name} age={age}/>
          })}
      </div>
    );

}

export default App;
