<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <router-link class="navbar-item is-tab" to="/category/apps">Apps</router-link>
            <router-link class="navbar-item is-tab" :to="{ name : 'category', params : { id : 'vr' } }">VR</router-link>
            <router-link class="navbar-item is-tab" to="/projects">Projects</router-link>
            <router-link class="navbar-item is-tab" to="/blog">Blog</router-link>
            <router-link class="navbar-item is-tab" to="/login" exact>
                <span v-if="isAuthenticated">Logout</span>
                <span v-else>Login</span>
            </router-link>
        </div>
    </nav>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed : {
            ...mapGetters(['isAuthenticated'])
        }
    }
</script>
