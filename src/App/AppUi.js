import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodo,
    completeTodo,
    deleteTodo,

}) {
    return (
        <>
            {/* React.Fragment */}

            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {!loading && searchedTodo.length == 0 && <EmptyTodos />}

                {searchedTodo.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

        </>
        // React.Fragment
    );
}

export {
    AppUI
}