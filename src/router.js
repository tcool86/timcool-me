import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from './theme/blog.vue'
import about from './theme/about.vue'
import portfolio from './theme/portfolio.vue'
import notFound from './theme/not-found.vue'

// const notFound = () => System.import('./theme/not-found.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    linkActiveClass : 'is-active',
    scrollBehavior : (to, from, savedPosition) => ({ y : 0 }),
    routes : [{
        path : '/',
        redirect : '/about'
    }, {
        path : '/about',
        component : about
    }, {
        path : '/portfolio',
        component : portfolio
    }, {
        path : '/blog',
        component : blog
    }, {
        path : '*',
        component : notFound
    }]
})

export default router
