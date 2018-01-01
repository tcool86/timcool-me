import appServices from '../app.service.js'
import truncate from 'truncate'

const defaultState = {
    projects : []
}

const inBrowser = (typeof window !== 'undefined')
var state = defaultState
if (inBrowser) {
    const initialState = window.__INITIAL_STATE__
    state = (initialState) ? initialState.projectsModule : defaultState
}

const getters = {
    projects : state => state.projects
}

const actions = {
    updateProjects (context) {
        return appServices.getProjects().then(data => {
            data.map((project) => {
                let shortDescription = truncate(project.description, 450)
                project.shortDescription = shortDescription
                return project
            })
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
