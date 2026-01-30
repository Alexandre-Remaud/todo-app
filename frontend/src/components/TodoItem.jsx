import { useState } from 'react'

export default function TodoItem({ todo, id, onDelete, onToggle, isDone, onUpdateTodo }) {
    const [isEditing, setIsEditing] = useState(null)
    const [editValue, setEditValue] = useState("")

    const startEdit = () => {
        setIsEditing(true)
        setEditValue(todo)
    }

    const saveEdit = () => {
        onUpdateTodo(id, editValue)
        setIsEditing(false)
    }

    return (
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group">
            <input
                type="checkbox"
                checked={isDone}
                onChange={() => onToggle(id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            />
            {
                isEditing ? (
                    <input className="flex-1 text-gray-800 select-none" type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                ) : (
                    <p className={`flex-1 text-gray-800 select-none ${isDone ? 'line-through' : ''}`}>{todo}</p>
                )
            }
            <button className="opacity-0 group-hover:opacity-100 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 text-sm font-medium" {...isEditing ? { onClick: saveEdit } : { onClick: startEdit }}>{isEditing ? 'Enregistrer' : 'Editer'}</button>
            <button
                onClick={() => onDelete(id)}
                className="opacity-0 group-hover:opacity-100 px-3 py-1 text-red-600 hover:bg-red-50 rounded-md transition-all duration-200 text-sm font-medium"
            >
                Supprimer
            </button>
        </div>
    )
}