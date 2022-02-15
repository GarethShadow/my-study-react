import React, {Component} from "react";
import "./StyleTodoListItem.css";
import TodoListItemButton from "../TodoListItemButton";

class TodoListItem extends Component {

    render() {
        const {
            label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            done,
            important
        } = this.props;

        let classNames = "todo-list__item-style";

        if (done) {
            classNames += " done";
        }

        if (important) {
            classNames += " important";
        }

        return (
            <div className="todo-list-item__block">
                <span className={classNames} onClick={onToggleDone}>{label}</span>
                <TodoListItemButton onDeleted={onDeleted} onToggleImportant={onToggleImportant}/>
            </div>
        );
    }
}

export default TodoListItem;