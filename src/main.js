import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).mount('#app')
// router must be registered before the app is mounted
// otherwise it won't work
app.use(router)
app.mount('#app')
