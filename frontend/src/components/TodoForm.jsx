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
        <div className="w-full max-w-md">
            <form className="flex gap-2" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ajouter une tâche..." 
                    value={todo} 
                    onChange={handleTodoChange}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                    Ajouter
                </button>
            </form>
        </div>
    )
}