import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './app.vue';
import router from './router';
import './assets/styles/main.css';

export function initializeApp() {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);

  return { app };
}
