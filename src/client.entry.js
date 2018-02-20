import { app, router } from './app'
import prefetch from './prefetch.js'

router.onReady(() => {
    app.$mount('#app')
    prefetch.prefetchBlogPosts()
})
