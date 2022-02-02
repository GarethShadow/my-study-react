import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

function App() {
    const  todoDate = [
        {label: "Drink Coffe", important: false},
        {label: "Build awesome app", important: true},
        {label: "Learn React", important: false}
    ]

    return (
        <>
            <Header />
            <SearchPanel />
            <TodoList todos={todoDate}/>
        </>);
}

export default App;