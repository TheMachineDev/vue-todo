<script setup lang="ts">
import { PhPlusCircle } from '@phosphor-icons/vue'
</script>

<template>
  <button class="submit-button" type="submit">
    Add
    <PhPlusCircle :size="20" weight="bold" />
  </button>
</template>

<style scoped>
.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1rem;
  border-radius: 8px;
  border: 0;
  background-color: var(--green-500);
  color: var(--gray-100);
  font-weight: bold;
  font-size: 0.875rem;
  transition: background-color 0.1s;
  cursor: pointer;
  transition:
    background-color 50ms,
    outline 50ms;
}

.submit-button:disabled {
  filter: brightness(70%);
  cursor: not-allowed;
}

.submit-button:not(:disabled):hover {
  background-color: var(--green-300);
}

.submit-button:focus {
  box-shadow: none;
  outline: 2px solid var(--green-300);
  outline-offset: 2px;
  background-color: var(--green-300);
}
</style>
