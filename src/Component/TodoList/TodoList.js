import TodoListItem from "./TodoListItem/TodoListItem";

function TodoList() {
    return (
        <ul>
            <li><TodoListItem label="Drink Coffe"/></li>
            <li><TodoListItem label="Build awesome app" important /></li>
            <li><TodoListItem label="Learn React" /></li>
        </ul>
    );
}

export default TodoList;