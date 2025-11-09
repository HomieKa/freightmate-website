import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import './assets/css/main.css';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});
app.use(VueQueryPlugin, { queryClient });

const head = createHead();
app.use(head);

app.use(router);

app.mount('#app');
