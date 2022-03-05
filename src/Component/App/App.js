import React, {Component} from "react";
import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import "../Header/StyleHeader.css";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import StatusFilterItem from "../StatusFilterItem";

export default class App extends Component {
    maxId = 1;

    state = {
        todoDate: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Build awesome app"),
            this.createTodoItem("Learn React"),
        ],
        term: "",
        filter: "all"
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

    onSearchChange = (term) => {
        this.setState({term});
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    serch(items, term) {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filter(items, filter) {
        switch (filter) {
            case "all":
                return items;
            case "active":
                return items.filter((item) => !item.done);
            case "done":
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const {todoDate, term, filter} = this.state;

        const visibleItems = this.filter(this.serch(todoDate, term), filter);

        const doneCount = todoDate.filter((el) => el.done).length;

        const todoCount= todoDate.length - doneCount;

        return (
            <div className="full-container">
                <Header todoCount={todoCount} doneCount={doneCount}/>
                <div className="serch__container">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <StatusFilterItem filter={filter} onFilterChange={this.onFilterChange}/>
                </div>

                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}