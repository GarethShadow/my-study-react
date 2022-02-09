import React from "react"
import "./StyleTodoListItemButton.css";

const TodoListItemButton = () => {
    return (
        <div className="list-item__button-block">
            <button className="list-item__btn-style btn-left">left</button>
            <button className="list-item__btn-style btn-right"><i className="fa fa-address-book" aria-hidden="true"></i></button>
        </div>
    );
};

export default TodoListItemButton;