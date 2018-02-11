import appServices from '../app.service.js'
import truncate from 'truncate'
import DateFormatter from 'dateformat'
import HTMLDecoder from 'decode-html'
import striphtml from 'js-striphtml'

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
                let decodedDescription = HTMLDecoder(project.description)
                project.description = decodedDescription
                let strippedDescription = striphtml.stripTags(project.description)
                let shortDescription = truncate(strippedDescription, 450)
                project.shortDescription = shortDescription
                let searchableDescription = strippedDescription.toLowerCase() + project.title.toLowerCase()
                project.searchableDescription = searchableDescription
                project.lastUpdatedFormatted = DateFormatter(new Date(project.last_updated), 'mmmm dS, yyyy')
                project.createdDateFormatted = DateFormatter(new Date(project.date_started), 'mmmm dS, yyyy')
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
