import React from "react"
import "./StyleTodoListItemButton.css";

const TodoListItemButton = () => {
    return (
        <div className="list-item__button-block">
            <button className="list-item__btn-style btn-left"><i className="fa fa-trash-o"></i></button>
            <button className="list-item__btn-style btn-right"><i className="fa fa-exclamation"></i></button>
        </div>
    );
};

export default TodoListItemButton;