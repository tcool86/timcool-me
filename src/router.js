import Vue from 'vue'
import VueRouter from 'vue-router'
import blog from './theme/blog/blog.vue'
import about from './theme/about.vue'
import extra from './theme/extras/extra.vue'
import projects from './theme/projects/projects.vue'
import resume from './theme/resume/resume.vue'
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
        path : '/resume',
        component : resume
    }, {
        path : '/projects',
        component : projects
    }, {
        path : '/projects/:deeplink',
        component : projects
    }, {
        path : '/blog',
        component : blog
    }, {
        path : '/extra',
        component : extra
    }, {
        path : '*',
        component : notFound
    }]
})

export default router
