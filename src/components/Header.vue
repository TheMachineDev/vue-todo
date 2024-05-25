<script setup lang="ts"></script>

<template>
  <header class="header">
    <img class="logo" src="../assets/logo.svg" />
    <h1>to<span>do</span></h1>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--gray-700);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.75rem 0;
  gap: 1rem;
}

.header img {
  height: 2.5rem;
}

.header h1 {
  font-size: 3rem;
  line-height: 1;
  font-weight: 900;
  color: var(--green-500);
}

.header h1 span {
  color: var(--blue-600);
}
</style>
