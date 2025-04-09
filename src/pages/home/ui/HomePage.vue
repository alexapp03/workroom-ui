<script setup lang="ts">
import { WelcomeCard } from '@widgets/WelcomeCard';
</script>

<template>
  <main class="home-page">
    <WelcomeCard
      title="Welcome to WorkRoom"
      description="Your modern CRM solution for managing customer relationships">
      <p>Get started by exploring the dashboard and features.</p>
      <div class="actions">
        <button class="btn">Get Started</button>
        <button class="btn btn-outline">Learn More</button>
      </div>
    </WelcomeCard>
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
