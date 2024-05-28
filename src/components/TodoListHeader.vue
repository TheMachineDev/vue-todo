<script setup lang="ts">
defineProps<{
  todosCount: number
  completedTodosCount: number
}>()

// const completedTodosCount = computed(() => {
//   return props.todosTotal > 0 ? props.completedTodos + ' de ' + props.todosTotal : 0
// })

// const { todosTotal, completedTodos } = toRefs(props)

// const completedTodosCount = computed(() =>
//   todosTotal.value > 0 ? completedTodos.value + ' de ' + todosTotal.value : 0
// )
</script>

<template>
  <header class="header">
    <div class="counter">
      <p>Todos created</p>
      <span>{{ todosCount }}</span>
    </div>
    <div class="counter">
      <p>Completed</p>
      <span v-if="todosCount > 0">{{ completedTodosCount + ' of ' + todosCount }}</span>
      <span v-else>0</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.counter {
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 8px;
}

.counter:nth-child(2) p {
  color: var(--green-300);
}

.counter p {
  font-size: 0.875rem;
  color: var(--blue-300);
}

.counter span {
  font-size: 0.75rem;
  background-color: var(--gray-400);
  padding: 0.125rem 0.5rem;
  border-radius: 50px;
}
</style>
