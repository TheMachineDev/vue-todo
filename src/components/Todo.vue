<script setup lang="ts">
import { PhCheckCircle, PhTrash } from '@phosphor-icons/vue'
</script>

<template>
  <div class="todo">
    <div class="checkboxContainer">
      <input type="checkbox" readOnly />
      <label for="">
        <span><PhCheckCircle class="checkCircle" weight="regular" :size="24" /></span>
      </label>
    </div>
    <button title="Deletar tarefa">
      <PhTrash :size="16" weight="bold" />
    </button>
  </div>
</template>

<style scoped>
.todo {
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

.todo button {
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

.todo button:hover {
  background-color: var(--gray-400);
  color: var(--danger);
}

.checkboxContainer {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.checkboxContainer label {
  line-height: 1.4;
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
  line-break: anywhere;
  transition:
    color 150ms,
    text-decoration 150ms;
}

.checkboxContainer input[type='checkbox'] {
  cursor: pointer;
  opacity: 0;
  position: absolute;
}

.checkboxContainer span {
  overflow: hidden;
  flex: none;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  border: 2px solid var(--blue-300);
  margin: 0.2rem;
  box-sizing: border-box;
  position: relative;
  outline-offset: 2px;
  transition:
    background-color 150ms,
    border-color 150ms;
  -moz-transition:
    background-color 50ms,
    border-color 50ms;
}

.checkCircle {
  position: absolute;
  inset: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  opacity: 0;
  color: var(--gray-100);
  line-height: 0;
  display: flex;
  align-items: stretch;
  transition: opacity 150ms;
  -moz-transition: opacity 50ms;
}

.checkboxContainer input[type='checkbox']:focus + label span {
  outline: 2px solid var(--purple-300);
}

.checkboxContainer span:hover,
.checkboxContainer input[type='checkbox']:hover + label span {
  background-color: var(--blue-500);
}

.checkboxContainer input[type='checkbox']:checked + label span {
  background-color: var(--purple-500);
  border-color: var(--purple-500);
}

.checkboxContainer input[type='checkbox']:checked + label span .checkCircle {
  opacity: 1;
}

.checkboxContainer input[type='checkbox']:checked:hover + label span {
  /* .checkboxContainer input[type="checkbox"]:checked:hover + label span .checkCircle */
  background-color: var(--purple-300);
  border-color: var(--purple-300);
}

.checkboxContainer input[type='checkbox']:checked + label {
  color: var(--gray-300);
  text-decoration: line-through;
}
</style>
