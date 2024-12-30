// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 富文本组件
import Editor from './components/Editor/index.vue'

const app = createApp(App)
app.component('Editor', Editor)

app.use(ElementPlus)
app.mount('#app')