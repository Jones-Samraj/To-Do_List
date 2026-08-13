import React, { useState } from "react";
import './App.css'

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  const addTask = () => {
    const trimmedTask = taskInput.trim();
    if (trimmedTask === "") {
      alert("Enter Your Task");
      return;
    }
    setTasks([...tasks, trimmedTask]);
    setTaskInput("");
  };
  const editTask = (index) => {
    const newTaskText = prompt("Edit Task:", tasks[index]);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      const updatedTasks = tasks.slice();
      updatedTasks[index] = newTaskText.trim();
      setTasks(updatedTasks);
    }
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Add a New Task..!"
      />
      <button onClick={addTask}>Add Task</button>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
