import appServices from '../app.service.js'

const defaultState = {
    posts : [],
    categoryId : 0
}

const inBrowser = (typeof window !== 'undefined')
var state = defaultState
if (inBrowser) {
    const initialState = window.__INITIAL_STATE__
    state = (initialState) ? initialState.postsModule : defaultState
}

const getters = {
    posts : state => state.posts
}

const actions = {
    updateCategory (context, categoryId) {
        return appServices.getPosts(categoryId).then(data => {
            context.commit('updateCategory', {
                categoryId,
                posts : data
            })
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
