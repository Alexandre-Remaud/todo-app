import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { useState } from 'react'

let nextId = 0;

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(text) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        text: text,
        isDone: false
      }
    ]);
  }
  
  function handleDeleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  
  function handleToggleTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-600">Gérez vos tâches simplement</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Ajouter une tâche</h2>
              <TodoForm handleAddTodo={handleAddTodo} />
            </div>
            
            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Mes tâches {todos.length > 0 && `(${todos.length})`}
              </h2>
              <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
            </div>
          </div>
        </div>
        
        {todos.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              {todos.length} {todos.length === 1 ? 'tâche' : 'tâches'} en cours
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
