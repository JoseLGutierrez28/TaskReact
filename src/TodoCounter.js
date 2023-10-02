import './Css/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <div>
      <h1 className="tittle">
        Has completado <span>{completed}</span> de <span>{total}</span> Todos
      </h1>
    </div>
  );
}

export {
  TodoCounter
}