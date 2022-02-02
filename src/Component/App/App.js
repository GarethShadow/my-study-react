import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

function App() {
    const  todoDate = [
        {label: "Drink Coffe", important: false, id: 1},
        {label: "Build awesome app", important: true, id:2},
        {label: "Learn React", important: false, id:3}
    ]

    return (
        <>
            <Header />
            <SearchPanel />
            <TodoList todos={todoDate}/>
        </>);
}

export default App;