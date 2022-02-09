import TodoListItem from "./TodoListItem/TodoListItem";
import "./StyleTodo.css";

function TodoList(props) {
    const {todos} = props;

    return (
        <ul className="">
            {todos.map((item) => {
                const {id, ...itemsProps} = item;
                return <li key={id} className="todo-list__list-style"><TodoListItem {...itemsProps}/></li>

            })}
        </ul>
    );
}

export default TodoList;