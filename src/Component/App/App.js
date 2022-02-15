import React, {Component} from "react";
import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import "../Header/StyleHeader.css";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default class App extends Component {
    maxId = 1;

    state = {
        todoDate: [
            this.createTodoItem("Drink Coffe"),
            this.createTodoItem("Build awesome app"),
            this.createTodoItem("Learn React"),
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    deleteItem = (id) => {
        this.setState(({todoDate}) => {
            const idx = todoDate.findIndex((el) => el.id === id);
            todoDate.splice(idx, 0);

            const newArray = [...todoDate.slice(0, idx), ...todoDate.slice(idx + 1)];

            return {
                todoDate: newArray
            };
        })
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoDate}) => {
            const newArray = [...todoDate, newItem];

            return {
                todoDate: newArray
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];

        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onToggleImportant = (id) => {
        this.setState(({todoDate}) => {
            return {
                todoDate: this.toggleProperty(todoDate, id, "important")
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoDate}) => {
            return {
                todoDate: this.toggleProperty(todoDate, id, "done")
            };
        });
    };

    render() {
        const {todoDate} = this.state;
        const doneCount = todoDate.filter((el) => el.done).length;

        const todoCount= todoDate.length - doneCount;

        return (
            <div className="full-container">
                <Header todoCount={todoCount} doneCount={doneCount}/>
                <SearchPanel/>
                <TodoList todos={todoDate}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}