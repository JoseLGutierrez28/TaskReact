import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de React", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Hola Mundo", completed: false },

]

function App() {
  return (
    <>
    {/* React.Fragment */}

      <TodoCounter completed={10} total={20} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
    // React.Fragment
  );
}




export default App;
