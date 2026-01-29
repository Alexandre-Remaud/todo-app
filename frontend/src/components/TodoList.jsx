import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleDeleteTodo, handleToggleTodo }) {
    if (todos.length === 0) {
        return (
            <div className="w-full max-w-md text-center py-8">
                <p className="text-gray-500 italic">Aucune tâche pour le moment</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md space-y-2">
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo.text}
                    isDone={todo.isDone}
                    id={todo.id}
                    onDelete={handleDeleteTodo}
                    onToggle={handleToggleTodo}
                />
            ))}
        </div>
    )
}