import { app } from './app.vue'

app.$mount('#app')

if (module.hot) {
    module.hot.accept()
}
