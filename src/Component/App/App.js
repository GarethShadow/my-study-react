import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

function App() {
    console.log("hello worls");

    return (
        <>
            <Header />
            <SearchPanel />
            <TodoList />
        </>);
}

export default App;