import React, { Component } from "react";
import "./StyleTodoListItem.css";
import TodoListItemButton from "../TodoListItemButton";

class TodoListItem extends Component {
    render() {
        const {label, important = false} = this.props;

        const style = {
            color: important ? "tomato" : "black"
        };

        return (
            <div className="todo-list-item__block">
                <span className="todo-list__item-style" style={style}>{label}</span>
                <TodoListItemButton/>
            </div>
        );
    }
}

export default TodoListItem;