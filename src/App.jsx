import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addTodo() {
    if (newItem === "") return;

    setTodos([...todos, newItem]);
    setNewItem("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Todo List</h1>

      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;