import Vue from 'vue'
import Vuex from 'vuex'
import postsModule from './posts.js'
import projectsModule from './projects.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules : {
        postsModule,
        projectsModule
    }
})

export default store
