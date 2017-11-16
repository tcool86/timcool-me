<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <router-link to="/">
                <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
            </router-link>
            <router-link class="navbar-item is-tab" to="/category/apps">Apps</router-link>
            <router-link class="navbar-item is-tab" :to="{ name : 'category', params : { id : 'vr' } }">VR</router-link>
            <router-link class="navbar-item is-tab" to="/login" exact>
                <span v-if="isAuthenticated">Logout</span>
                <span v-else>Login</span>
            </router-link>
        </div>
    </nav>
</template>
<script>
import eventBus from '../event-bus.js'

export default {
    data () {
        return {
            isAuthenticated : false
        }
    },
    created () {
        eventBus.$on('authStatusUpdate', isAuthenticated => {
            this.isAuthenticated = isAuthenticated
        })
    }

}
</script>
