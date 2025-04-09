<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="welcome-card">
    <h2 class="title">{{ title }}</h2>
    <p v-if="description" class="description">{{ description }}</p>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.welcome-card {
  background-color: var(--color-background-soft);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.title {
  color: var(--color-heading);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.description {
  color: var(--color-text);
  margin-bottom: 1rem;
}

.content {
  margin-top: 1rem;
}
</style>
