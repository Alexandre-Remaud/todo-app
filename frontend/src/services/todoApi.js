export function fetchTodos() {
  return localStorage.getItem("todos")
}

export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos))
}
