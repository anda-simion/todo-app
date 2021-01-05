import React, { useState } from "react";
import { Form, Input, Button } from "antd";

interface EditableTodoProps {
  todo: Todo;
  editTodo: EditTodo;
  cancelEditTodo: CancelEditTodo;
}

const EditableTodo: React.FC<EditableTodoProps> = ({ todo, editTodo, cancelEditTodo }) => {
  const [editedTodo, setEditedTodo] = useState(todo["label"]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    editTodo(todo["id"], editedTodo);
    cancelEditTodo();
  };

  const handleTodoEditing = (event: React.ChangeEvent<HTMLInputElement>) => {
    const editedTodo = event.target.value;
    setEditedTodo(editedTodo);
  };

  const handleEditingCancel = () => {
    cancelEditTodo();
  };

  return (
    <Form onSubmit={handleSubmit} className="edit-todo-form">
      <Input name="editedTodo" value={editedTodo} onChange={handleTodoEditing} />
      <span className="edit-actions">
        <Button type="primary" htmlType="submit" icon="check" />
        <Button type="primary" icon="close" onClick={handleEditingCancel} />
      </span>
    </Form>
  );
};

export default EditableTodo;
