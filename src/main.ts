import { createApp } from 'vue'
import App from '@/App.vue'

// all scss will be imported
import '@style/index.scss'
// base css layout
import 'normalize.css/normalize.css'

//icon-park
import '@icon-park/vue-next/styles/index.css'

createApp(App).mount('#app')
