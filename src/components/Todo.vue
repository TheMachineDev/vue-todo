<script setup lang="ts">
import { PhCheck, PhTrash } from '@phosphor-icons/vue'
import type { ITodo } from '@/App.vue'
import { toRefs } from 'vue'

const props = defineProps<{
  todo: ITodo
}>()

defineEmits(['toggle-todo', 'delete-todo'])
</script>

<template>
  <div class="container">
    <div>
      <input
        :id="todo.id"
        type="checkbox"
        readOnly
        :checked="todo.isCompleted"
        @click="$emit('toggle-todo', todo.id, !todo.isCompleted)"
      />
      <label :for="todo.id">
        <span class="checkbox" :class="{ 'checkbox-checked': todo.isCompleted }"
          ><PhCheck class="check" v-if="todo.isCompleted" weight="bold" :size="12"
        /></span>
        <p class="paragraph" :class="{ 'paragraph-checked': todo.isCompleted }">
          {{ todo.content }}
        </p>
      </label>
    </div>
    <button title="Deletar tarefa" @click="$emit('delete-todo', todo.id)">
      <PhTrash :size="16" weight="bold" />
    </button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: start;
  padding: 1rem;
  gap: 0.75rem;
  justify-content: space-between;
  background-color: var(--gray-500);
  border-radius: 8px;
  outline: 1px solid var(--gray-400);
}

.container button {
  background: none;
  border: 0;
  color: var(--gray-300);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.375rem;
  margin-top: -0.187rem;
  border-radius: 4px;
  transition:
    background-color 0.1s,
    color 0.1s;
}

.container button:hover {
  background-color: var(--gray-400);
  color: var(--danger);
}

.container div:first-child {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.container input[type='checkbox'] {
  cursor: pointer;
  opacity: 0;
  position: absolute;
}

.container label {
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
}

.paragraph {
  line-height: 1.4;
  margin-top: -1.4px;
  line-break: anywhere;
  user-select: none;
}

.paragraph-checked {
  color: var(--gray-300);
  text-decoration: line-through;
}

.container div:hover .paragraph:not(.paragraph-checked) {
  color: var(--gray-200);
}

.container div:hover .checkbox:not(.checkbox-checked) {
  background-color: var(--blue-500);
}

.checkbox {
  overflow: hidden;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--blue-300);
  width: 1.1rem;
  height: 1.1rem;
}

/* .checkbox:not(.checkbox-checked):hover {
  background-color: var(--blue-300);
} */

.checkbox-checked {
  background-color: var(--green-500);
  border-color: var(--green-500);
}

.check {
  color: var(--gray-100);
  opacity: 0;
  transition: opacity 150ms;
  -moz-transition: opacity 150ms;
}

.checkbox-checked .check {
  opacity: 1;
}

.paragraph,
.checkbox {
  transition:
    color 150ms,
    background-color 150ms,
    text-decoration 150ms,
    border-color 150ms;
}

/* .container input[type='checkbox']:focus + label span {
  outline: 2px solid var(--purple-300);
}

.container span:hover,
.container input[type='checkbox']:hover + label span {
  background-color: var(--blue-500);
}

.container input[type='checkbox']:checked + label span {
  background-color: var(--purple-500);
  border-color: var(--purple-500);
}

.container input[type='checkbox']:checked + label span .check {
  opacity: 1;
}

.container input[type='checkbox']:checked:hover + label span {
  /* .checkboxContainer input[type="checkbox"]:checked:hover + label span .checkCircle 
  background-color: var(--purple-300);
  border-color: var(--purple-300);
}

.container input[type='checkbox']:checked + label {
  color: var(--gray-300);
  text-decoration: line-through;
}
 
*/
</style>
