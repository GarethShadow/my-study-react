import TodoListItem from "./TodoListItem/TodoListItem";

function TodoList(props) {
    const {todos} = props;

    return (
        <ul>
            {todos.map((item) => {
                return <li><TodoListItem {...item}/></li>

            })}
        </ul>
    );
}

export default TodoList;