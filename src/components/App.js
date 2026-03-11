import React, { useState, useMemo } from "react";

// generate 50 tasks
function generateTasks() {
  const tasks = [];

  for (let i = 1; i <= 25; i++) {
    tasks.push({ id: i, text: `Active Task ${i}`, completed: false });
  }

  for (let i = 26; i <= 50; i++) {
    tasks.push({ id: i, text: `Completed Task ${i}`, completed: true });
  }

  return tasks;
}

// simulate heavy computation
function slowFunction() {
  const start = Date.now();
  while (Date.now() - start < 3) {}
}

function App() {
  const [tab, setTab] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const tasks = useMemo(() => generateTasks(), []);

  // filter tasks with useMemo
  const filteredTasks = useMemo(() => {
    if (tab === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (tab === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tab, tasks]);

  return (
    <div
      style={{
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>Todo App</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("active")}>Active</button>
        <button onClick={() => setTab("completed")}>Completed</button>
      </div>

      <TaskList tasks={filteredTasks} />
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <ul style={{ marginTop: "20px" }}>
      {tasks.map((task) => {
        slowFunction(); // artificial slowdown
        return (
          <li key={task.id}>
            {task.text} {task.completed ? "✔" : ""}
          </li>
        );
      })}
    </ul>
  );
}

export default App;