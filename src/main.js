import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'
import roters from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(roters)
app.mount('#app')
