import 'es6-promise/auto'
import Vue from 'vue'
import store from '../../../src/vuex/index.js'
import VueRouter from 'vue-router'
import Blog from '../../../src/theme/blog.vue'

describe('blog.vue', () => {
    it('should load front-end links', (done) => {
        Vue.use(VueRouter)
        const router = new VueRouter({
            routes : [
                {
                    path : '/',
                    component : Blog
                }
            ]
        })
        const testElement = document.createElement('div')
        const vue = new Vue({
            el : testElement,
            router,
            store,
            render : (h) => h('router-view')
        })
        store.watch((state) => {
            return state.postsModule.posts
        }, function () {
            const columnCount = vue.$el.querySelectorAll('.column').length
            expect(columnCount).to.equal(1)
            done()
        })
    })
})
