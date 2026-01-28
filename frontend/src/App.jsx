import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
