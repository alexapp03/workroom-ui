<script setup lang="ts">
import { InputText, Button } from 'primevue';
</script>

<template>
  <main class="home-page">
    <InputText placeholder="Placeholder" />

    <div style="margin-top: 1rem">
      <Button severity="success" label="Submit" />
    </div>
  </main>
</template>

<style scoped>
.home-page {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  background-color: var(--vt-c-indigo);
  color: white;
  border: none;
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--vt-c-indigo);
  color: var(--vt-c-indigo);
}
</style>
