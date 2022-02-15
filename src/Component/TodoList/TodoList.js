import TodoListItem from "./TodoListItem";
import "./StyleTodo.css";

function TodoList(props) {
    const {
        todos,
        onDeleted,
        onToggleImportant,
        onToggleDone
    } = props;

    return (
        <ul className="">
            {todos.map((item) => {
                const {id, ...itemsProps} = item;
                return <li key={id} className="todo-list__list-style">
                    <TodoListItem
                        {...itemsProps}
                        onDeleted={() => onDeleted(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}
                    />
                </li>

            })}
        </ul>
    );
}

export default TodoList;