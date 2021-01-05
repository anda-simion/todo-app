import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  editTodo: EditTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo, editTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo["id"]} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
