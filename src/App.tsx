import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import { v1 as uuidv1 } from "uuid";

const initialTodos: Array<Todo> = [
  {
    id: "guid1",
    label: "Feed the cats",
    done: true
  },
  {
    id: "guid2",
    label: "Walk the dog",
    done: false
  },
  {
    id: "guid3",
    label: "Learn TypeScript",
    done: false
  },
  {
    id: "guid4",
    label: "Read TS documentation",
    done: false
  }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo["id"] === id) {
        return { ...todo, done: !todo["done"] };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo: string) => {
    const newTodoLabel = newTodo.trim();
    const id: string = uuidv1();
    if (newTodoLabel !== "") {
      setTodos([...todos, { id: id, label: newTodoLabel, done: false }]);
    }
  };

  const removeTodo: RemoveTodo = (id: string) => {
    const updatedTodos = todos.filter(item => item["id"] !== id);
    setTodos(updatedTodos);
  };

  const editTodo: EditTodo = (id: string, editedTodoLabel: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo["id"] === id) {
        return { id: id, label: editedTodoLabel, done: todo["done"] };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h3>My todo list</h3>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
