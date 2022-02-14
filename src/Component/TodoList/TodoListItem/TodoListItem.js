import React, {Component} from "react";
import "./StyleTodoListItem.css";
import TodoListItemButton from "../TodoListItemButton";

class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    };

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            };
        });
    }

    render() {
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;

        let classNames = "todo-list__item-style";

        if (done) {
            classNames += " done";
        }

        if (important) {
            classNames += " important";
        }

        return (
            <div className="todo-list-item__block">
                <span className={classNames} onClick={this.onLabelClick}>{label}</span>
                <TodoListItemButton onMarkImportant={this.onMarkImportant} onDeleted={onDeleted} />
            </div>
        );
    }
}

export default TodoListItem;