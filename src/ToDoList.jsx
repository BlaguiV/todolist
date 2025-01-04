import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState(["eat breakfast", "take a shower"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  return (
    <>
      <div className="todolist">
        <h1>ToDoList</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((element, index) => (
            <li key={index}>
              <span className="text">{tasks}</span>
              <button className="delete-button" onClick={deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
