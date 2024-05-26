<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
import Header from './components/Header.vue'
import Input from './components/Input.vue'
import Button from './components/Button.vue'
import TodoListHeader from './components/TodoListHeader.vue'
import Todo from './components/Todo.vue'
import Empty from './components/Empty.vue'

// Interfaces
export interface ITodo {
  id: string
  content: string
  isCompleted: boolean
}

// Refs
const todos = reactive<ITodo[]>([])
const inputValue = ref('')

// Functions
function handleCreateTodo() {
  if (inputValue) {
    const newTodo = {
      id: String(new Date().getTime()),
      content: inputValue.value,
      isCompleted: false
    }
    todos.push(newTodo)
    inputValue.value = ''
  }
}

function handleToggleTodoStatus(id: string, value: boolean) {
  const i = todos.findIndex((todo) => todo.id === id)
  todos[i].isCompleted = value
}

function handleDeleteTodo(id: string) {
  const i = todos.findIndex((todo) => todo.id === id)
  todos.splice(i, 1)
}

// Utility variables
const isSubmitDisabled = computed(() => (inputValue.value.length > 0 ? false : true))

const completedTodos = computed(() =>
  todos.reduce((count, currentTodo) => {
    if (currentTodo.isCompleted) {
      count += 1
    }
    return count
  }, 0)
)
</script>

<template>
  <Header />
  <main class="wrapper">
    <form action="" class="add-todo" @submit.prevent>
      <Input v-model="inputValue" />
      <Button @click="handleCreateTodo" :disabled="isSubmitDisabled" />
    </form>
    <section>
      <TodoListHeader :todos-count="todos.length" :completed-todos-count="completedTodos" />

      <div class="todo-list">
        <Todo
          v-if="todos.length > 0"
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @toggle-todo="handleToggleTodoStatus"
          @delete-todo="handleDeleteTodo"
        />
        <Empty v-else />
      </div>
    </section>
  </main>
</template>

<style scoped>
.wrapper {
  max-width: 46rem;
  margin: -1.75rem auto;

  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  gap: 4rem;
}

.add-todo {
  display: flex;
  gap: 8px;
}

.todo-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }

  .wrapper {
    padding: 0 2rem;
  }
}
</style>
