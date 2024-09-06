import './App.css';
import {useState} from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    const newTodoList = [...todoList, task];
    setTodoList(task.taskName !== "" ? newTodoList : todoList);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => <ul className="task">{task.taskName} <button onClick={() => deleteTask(task.id)}>X</button></ul>)}
      </div>
    </div>
  );
}

export default App;
