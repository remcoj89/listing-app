import '@/assets/styling/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// importing components
import DialogBox from './components/dialog-boxes/DeleteModal.vue'
import BaseButton from './components/base-components/BaseButton.vue'
import BaseCard from './components/base-components/BaseCard.vue'
import ListingCard from './components/listing-components/ListingCard.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('dialog-box', DialogBox)
app.component('listing-card', ListingCard)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)

app.mount('#app')
