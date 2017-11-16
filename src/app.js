import Vue from 'vue'
import store from './vuex/index.js'
import AppLayout from './theme/layout.vue'
import router from './router.js'

const app = new Vue({
    router,
    ...AppLayout,
    store
})

export { app, router, store }
