import React, { useState } from "react";
import { Form, Input, Button } from "antd";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Form onSubmit={handleSubmit} className="add-todo-form">
      <Input name="newTodo" placeholder="Add new TODO" value={newTodo} onChange={handleInputChange} />
      <Button type="primary" htmlType="submit" icon="plus" />
    </Form>
  );
};

export default AddTodoForm;
