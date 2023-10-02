import './Css/CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton" onClick={()=> console.log("hi")}>+</button>
    );
}

export {
    CreateTodoButton
}