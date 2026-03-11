import React, { useState, useMemo } from "react";

function App() {

  // generate tasks
  const todos = [];
  for (let i = 1; i <= 50; i++) {
    todos.push({
      id: i,
      title: `Todo ${i}`,
      completed: i > 25
    });
  }

  const [tab, setTab] = useState("all");

  const filteredTodos = useMemo(() => {

    if (tab === "active") {
      return todos.filter(todo => !todo.completed);
    }

    if (tab === "completed") {
      return todos.filter(todo => todo.completed);
    }

    return todos;

  }, [tab]);

  return (
    <div>
      <h1>Todo List App</h1>

      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>

      <ul>
        {filteredTodos.map(todo => {

          // Artificial slow rendering
          let startTime = performance.now();
          while (performance.now() - startTime < 500) {}

          return (
            <li key={todo.id}>
              {todo.title}
            </li>
          );

        })}
      </ul>
    </div>
  );
}

export default App;