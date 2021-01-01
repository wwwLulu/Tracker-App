import { createApp } from 'vue'
import App from './App.vue'

import store from './store/store'

// Vuex These are our global functions
// Currently not in use!

const app = createApp(App)

app.use(store)

app.mount('#app')
