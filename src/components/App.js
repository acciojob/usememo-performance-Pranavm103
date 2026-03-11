import React, { useState, useMemo } from "react";

function App() {

  // create 50 tasks
  const tasks = [];
  for (let i = 1; i <= 25; i++) {
    tasks.push({ id: i, title: `Active Task ${i}`, completed: false });
  }

  for (let i = 26; i <= 50; i++) {
    tasks.push({ id: i, title: `Completed Task ${i}`, completed: true });
  }

  const [filter, setFilter] = useState("all");

  // useMemo for filtering
  const filteredTasks = useMemo(() => {

    if (filter === "active") {
      return tasks.filter(task => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter(task => task.completed);
    }

    return tasks;

  }, [filter]);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Todo List</h2>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>

      <TaskList tasks={filteredTasks} />

    </div>
  );
}

function TaskList({ tasks }) {

  // Artificial slow rendering
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Slow rendering for 500ms
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title} {task.completed ? "(Completed)" : "(Active)"}
        </li>
      ))}
    </ul>
  );
}

export default App;