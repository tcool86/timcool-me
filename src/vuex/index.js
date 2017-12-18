import Vue from 'vue'
import Vuex from 'vuex'
import postsModule from './posts.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules : {
        postsModule
    }
})

export default store
