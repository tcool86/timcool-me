import Vue from 'vue'
import store from './vuex/index.js'
import AppLayout from './theme/layout.vue'
import router from './router.js'
import VueSVGIcon from 'vue-svgicon'
import VueClipboard from 'vue-clipboard2'
import VueLazyload from 'vue-lazyload'
import VueMq from 'vue-mq'

if (process.browser) {
    Vue.use(VueMq, {
        breakpoints : {
            mobile : 800,
            desktop : Infinity
        }
    })
}

Vue.use(VueLazyload)
Vue.use(VueSVGIcon)
Vue.use(VueClipboard)

const app = new Vue({
    router,
    ...AppLayout,
    store
})

export { app, router, store }
