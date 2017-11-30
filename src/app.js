import Vue from 'vue'
import store from './vuex/index.js'
import AppLayout from './theme/layout.vue'
import router from './router.js'
import VueSVGIcon from 'vue-svgicon'

Vue.use(VueSVGIcon)

const app = new Vue({
    router,
    ...AppLayout,
    store
})

export { app, router, store }
