import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const newTodoText = ref<string>('')

  const addTodo = () => {
    if (newTodoText.value.trim() === '') return

    todos.value.push({
      id: Date.now(),
      text: newTodoText.value,
      completed: false,
    })

    newTodoText.value = ''
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  return {
    todos,
    newTodoText,
    addTodo,
    removeTodo,
  }
})