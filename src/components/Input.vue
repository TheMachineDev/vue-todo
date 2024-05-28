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
  <input class="form-input" placeholder="Add a todo" :value="modelValue" @input="updateValue" />
</template>

<style scoped>
.form-input {
  width: 100%;
  background-color: var(--gray-500);
  color: var(--gray-100);
  line-height: 1.4;
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  border: 0px;
  box-shadow: 0 0 0 1px var(--gray-700);
  transition: box-shadow 50ms;
}

.form-input:focus {
  box-shadow: 0 0 0 2px var(--green-500);
}
</style>
