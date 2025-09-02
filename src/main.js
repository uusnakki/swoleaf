import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.use(pinia)
app.use(router)
app.use(PrimeVue, { ripple: true });

app.mount('#app')
