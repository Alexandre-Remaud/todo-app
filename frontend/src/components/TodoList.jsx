import TodoItem from "./TodoItem";

export default function TodoList ({ todos }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
        </div>
    )
}