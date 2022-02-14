import React, {Component} from "react";
import "./StyleTodoListItem.css";

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
        const {label} = this.props;
        const {done, important} = this.state;

        let classNames = "todo-list__item-style";

        if (done) {
            classNames += " done";
        }

        if(important) {
            classNames += " important";
        }

        return (
            <div className="todo-list-item__block">
                <span className={classNames} onClick={this.onLabelClick}>{label}</span>
                <div className="list-item__button-block">
                    <button className="list-item__btn-style btn-left"><i className="fa fa-trash-o"></i></button>
                    <button className="list-item__btn-style btn-right" onClick={this.onMarkImportant}><i className="fa fa-exclamation"></i></button>
                </div>
            </div>
        );
    }
}

export default TodoListItem;