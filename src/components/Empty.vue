<template>
  <div class="empty">
    <img src="../assets/clipboard.svg" alt="Clipboard icon" />
    <span>
      <b>You still haven't created a todo</b>
      <p>Create todos and organize your everyday tasks</p>
    </span>
  </div>
</template>

<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  gap: 0.75rem;
  border-top: 1px solid var(--gray-400);
  border-radius: 8px;
}

.empty span {
  line-height: 1.4;
  text-align: center;
  color: var(--gray-300);
}
</style>
