declare module "uuid";

// see if there is a more precis way of representing guid
type Todo = {
  id: string;
  label: string;
  done: boolean;
};

type ToggleTodo = (id: string) => void;

type AddTodo = (newTodo: string) => void;

type RemoveTodo = (id: string) => void;

type EditTodo = (id: string, editedTodoLabel: string) => void;

type CancelEditTodo = () => void;
