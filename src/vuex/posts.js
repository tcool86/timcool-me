import appServices from '../app.service.js'

const state = {
    posts : [],
    categoryId : 0
}

const getters = {
    posts : state => state.posts
}

const actions = {
    updateCategory (context, categoryId) {
        appServices.getPosts(categoryId).then(data => {
            context.commit('updateCategory', { categoryId, posts : data })
        })
    }
}

const mutations = {
    updateCategory (state, data) {
        state.categoryId = data.categoryId
        state.posts = data.posts
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}
