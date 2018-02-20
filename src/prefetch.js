import appServices from './app.service.js'

const prefetchBlogPosts = () => {
    appServices.getPosts()
}

export default {
    prefetchBlogPosts
}
