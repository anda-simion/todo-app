import React, { useState } from "react";
import { Button, Checkbox } from "antd";
import EditableTodo from "./EditableTodo";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  editTodo: EditTodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo, editTodo }) => {
  const [isEditing, setEdit] = useState(false);

  const handleToggleTodo = () => {
    toggleTodo(todo["id"]);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo["id"]);
  };

  const startEditTodo = () => {
    setEdit(true);
  };

  const cancelEditTodo = () => {
    setEdit(false);
  };

  return (
    <li>
      {isEditing ? (
        <EditableTodo todo={todo} editTodo={editTodo} cancelEditTodo={cancelEditTodo} />
      ) : (
        <React.Fragment>
          <Checkbox onChange={handleToggleTodo} checked={todo["done"]}>
            {todo["label"]}
          </Checkbox>
          <span className="todo-actions">
            <Button type="primary" icon="edit" onClick={startEditTodo} disabled={todo["done"]} />
            <Button type="primary" icon="delete" onClick={handleRemoveTodo} />
          </span>
        </React.Fragment>
      )}
    </li>
  );
};

export default TodoItem;
