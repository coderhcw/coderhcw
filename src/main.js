import { createApp } from 'vue'
import App from './App'
import router from  './router/index'
const app=createApp(App)
app.use(router)
app.mount('#app')
// new app({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
require('assets/css/base.css')

