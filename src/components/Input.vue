<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string
  }>(),
  { modelValue: '' }
)
const emit = defineEmits(['update:modelValue'])

function updateValue(e: Event) {
  const target = e.target as HTMLInputElement
  if (target) {
    emit('update:modelValue', target.value)
  }
}
</script>

<template>
  <input
    class="formInput"
    placeholder="Adicione uma tarefa"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<style scoped>
.formInput {
  width: 100%;
  background-color: var(--gray-500);
  color: var(--gray-100);
  line-height: 1.4;
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  border: 1px solid var(--gray-700);
}
</style>
