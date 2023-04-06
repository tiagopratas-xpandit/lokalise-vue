import { createApp } from 'vue/dist/vue.esm-bundler' //ESM bundler to get rid of some annoying warnings in the console and for general optimization
import App from './App.vue'
import router from './router'
import i18n from "./i18n" 

//import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
