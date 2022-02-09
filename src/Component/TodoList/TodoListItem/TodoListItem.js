import "./StyleTodoListItem.css";
import TodoListItemButton from "./TodoListItemButton/TodoListItemButton";

const TodoListItem = (props) => {
    const {label, important = false} = props;
    const style = {
        color: important ? "tomato" : "black"
    };
    return (
        <div className="todo-list-item__block">
            <span className="todo-list__item-style" style={style}>{label}</span>
            <TodoListItemButton />
        </div>
    );
};

export default TodoListItem;