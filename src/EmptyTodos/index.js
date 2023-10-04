import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {

  return (
    <div className='firstContainer'>
      <div className='loader'></div>
      <p className='textEmptyTodo'>Crea tu primer Task..!</p>
    </div>

    
  );
}

export {
  EmptyTodos
}