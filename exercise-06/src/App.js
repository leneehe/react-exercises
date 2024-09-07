import './App.css';
import {useState} from 'react';
import {Task} from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isComplete: false
    }
    const newTodoList = [...todoList, task];
    setTodoList(task.taskName !== "" ? newTodoList : todoList);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  const completeTask = (id) => {
    setTodoList(
        todoList.map((task) => {
        if (task.id === id) task.isComplete = true;
        return task
      })
    )
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => <Task taskName={task.taskName} id={task.id} isComplete={task.isComplete} deleteTask={deleteTask} completeTask={completeTask} />)}
      </div>
    </div>
  );
}

export default App;
