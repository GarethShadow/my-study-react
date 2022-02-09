import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import "../Header/StyleHeader.css";
import AddFormItem from "../AddFormItem/AddFormItem";

function App() {
    const  todoDate = [
        {label: "Drink Coffe", important: false, id: 1},
        {label: "Build awesome app", important: true, id:2},
        {label: "Learn React", important: false, id:3}
    ]

    return (
        <div className="full-container">
            <Header />
            <SearchPanel />
            <TodoList todos={todoDate}/>
            <AddFormItem />
        </div>);
}

export default App;