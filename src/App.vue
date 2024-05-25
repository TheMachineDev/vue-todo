<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
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
      isCompleted: true
    }
    todos.push(newTodo)
    inputValue.value = ''
  }
  console.log(todos)
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
  <div class="wrapper">
    <form action="" class="addTodo" @submit.prevent>
      <Input v-model="inputValue" />
      <Button @click="handleCreateTodo" :disabled="isSubmitDisabled" />
    </form>
    <main>
      <TodoListHeader :todos-count="todos.length" :completed-todos-count="completedTodos" />

      <div class="todoList">
        <Todo v-if="todos.length > 0" v-for="todo in todos" :key="todo.id" />
        <Empty v-else />
      </div>
    </main>
  </div>
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

.addTodo {
  display: flex;
  gap: 8px;
}

.todoList {
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
