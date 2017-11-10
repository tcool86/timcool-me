import Vue from 'vue'
import VueRouter from 'vue-router'
import category from './theme/category.vue'
import login from './theme/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes : [{
        path : '/',
        component : category
    }, {
        path : '/login',
        component : login
    }]
})

export default router
