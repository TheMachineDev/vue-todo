<script setup lang="ts">
import { PhPlusCircle } from '@phosphor-icons/vue'
</script>

<template>
  <button class="submitButton" type="submit">
    Criar
    <PhPlusCircle :size="20" weight="bold" />
  </button>
</template>

<style scoped>
.submitButton {
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
}

.submitButton:disabled {
  filter: brightness(70%);
  cursor: not-allowed;
}

.submitButton:not(:disabled):hover {
  background-color: var(--green-300);
}
</style>
