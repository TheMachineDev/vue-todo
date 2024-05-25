<template>
  <div class="empty">
    <img src="../assets/clipboard.svg" alt="Clipboard icon" />
    <span>
      <b>Você ainda não tem tarefas cadastradas</b>
      <p>Crie tarefas e organize seus itens a fazer</p>
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
