import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

const app = createApp(App)


app.config.globalProperties.axios = axios

app.use(store)

app.use(router)

app.mount('#app')
