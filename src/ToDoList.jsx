import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["eat breakfast"]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [error, setError] = useState("");
  const [isDone, setIsDone] = useState(false);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleEditedInputChange(event) {
    setEditedTask(event.target.value);
  }

  function addTask() {
    if (tasks.includes(newTask)) {
      setError("This task is already exists!");
      return;
    }
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
      setError("");
    }
  }

  function editTask(index) {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  }

  function saveEditedTask() {
    if (tasks.includes(editedTask)) {
      setError("This task is already exists!");
      return;
    }
    if (editedTask.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === editingIndex ? editedTask : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditedTask("");
      setError("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  return (
    <>
      <div className="todolist">
        <h1>ToDoList</h1>
        <div>
          <input
            className="input-task"
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        {editingIndex !== null ? (
          <div>
            <input
              type="text"
              value={editedTask}
              onChange={handleEditedInputChange}
            />
            <button className="save-button" onClick={saveEditedTask}>
              Save
            </button>
          </div>
        ) : null}
        {error && <div className="error-message">{error}</div>}
        <ol>
          {tasks.map((element, index) => (
            <li key={index}>
              <input type="checkbox" value={isDone} className="taskStatus" />
              <span className="text">{element}</span>
              <button className="edit-button" onClick={() => editTask(index)}>
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
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
