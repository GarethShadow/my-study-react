import React from "react";

const TodoListItemButton = props => {
    const {onDeleted, onMarkImportant} = props;
    return (
        <div className="list-item__button-block">
            <button className="list-item__btn-style btn-left" onClick={onDeleted}><i className="fa fa-trash-o"></i>
            </button>
            <button className="list-item__btn-style btn-right" onClick={onMarkImportant}><i
                className="fa fa-exclamation"></i></button>
        </div>
    );
};

export default TodoListItemButton;