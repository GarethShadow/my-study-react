import TodoListItem from "./TodoListItem/TodoListItem";

function TodoList(props) {
    const {todos} = props;

    return (
        <ul>
            {todos.map((item) => {
                const {id, ...itemsProps} = item;
                return <li key={id}><TodoListItem {...itemsProps}/></li>

            })}
        </ul>
    );
}

export default TodoList;