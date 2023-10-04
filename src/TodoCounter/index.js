import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    <div>
      <h1 className="tittle">
        Has completado
        <span>
          {completedTodos}
        </span>
        de
        <span>
          {totalTodos}
        </span>
        Todos
      </h1>
    </div>
  );
}

export {
  TodoCounter
}