import appServices from '../app.service.js'

const defaultState = {
    projects : []
}

const inBrowser = (typeof window !== 'undefined')
var state = defaultState
if (inBrowser) {
    const initialState = window.__INITIAL_STATE__
    state = (initialState) ? initialState.projectModule : defaultState
}

const getters = {
    projects : state => state.projects
}

const actions = {
    updateProjects (context) {
        return appServices.getProjects().then(data => {
            context.commit('updateProjects', {
                projects : data
            })
        })
    }
}

const mutations = {
    updateProjects (state, data) {
        state.projects = data.projects
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}
