import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const handleToggle = (index) => {
        // Toggle functionality can be implemented later
    };

    if (todos.length === 0) {
        return (
            <div className="w-full max-w-md text-center py-8">
                <p className="text-gray-500 italic">Aucune tâche pour le moment</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md space-y-2">
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    index={index}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    )
}