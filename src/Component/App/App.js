import React, {Component} from "react";
import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import "../Header/StyleHeader.css";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default class App extends Component {
    maxId = 4;

    state = {
        todoDate: [
            {label: "Drink Coffe", important: false, id: 1},
            {label: "Build awesome app", important: true, id: 2},
            {label: "Learn React", important: false, id: 3}
        ]
    };

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
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({todoDate}) => {
            const newArray = [...todoDate, newItem];

            return {
                todoDate: newArray
            }
        });
    };

    render() {
        return (
            <div className="full-container">
                <Header/>
                <SearchPanel/>
                <TodoList todos={this.state.todoDate} onDeleted={this.deleteItem}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}