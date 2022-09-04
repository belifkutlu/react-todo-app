import { useEffect, useState } from "react";

import TodoItem from "./components/TodoItem";
import AddTodoSection from "./components/AddTodoSection";
import "./App.css";

function App() {
  const initialValue = JSON.parse(localStorage.getItem("todos"));
  const [todoList, setTodoList] = useState(initialValue ? initialValue : []);
  const [todo, setTodo] = useState("");

  function addTodo() {
    if (todo.trim()) {
      const newTodo = { id: Date.now(), title: todo, completed: false };
      setTodoList([...todoList, newTodo]);
      setTodo("");
    } else {
      alert("bir deger giriniz");
    }
  }

  function removeTodo(item) {
    const newArray = todoList.filter((todo) => {
      return todo.id !== item.id;
    });
    setTodoList(newArray);
  }

  function completeTodo(item) {
    const completedTodos = todoList.map((todo) => {
      if (todo.id === item.id) {
        todo.completed = !item.completed;
      }
      return todo;
    });
    setTodoList(completedTodos);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoSection
        todo={todo}
        onAddTodo={addTodo}
        onInputChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <div className="todo-list">
        {todoList.length === 0 && (
          <p className="todo-not-found ">Todo not found</p>
        )}
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onComplete={() => completeTodo(item)}
            onRemove={() => removeTodo(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
