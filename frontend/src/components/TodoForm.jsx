import { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
    const [todo, setTodo] = useState('');
    const handleTodoChange = (event) => {
        setTodo(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Todo" value={todo} onChange={handleTodoChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}