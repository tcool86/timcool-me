<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <router-link to="/">
                <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
            </router-link>
            <router-link class="navbar-item is-tab" to="/category/front-end">Client</router-link>
            <router-link class="navbar-item is-tab" :to="{ name : 'category', params : { id : 'mobile' } }">Mobile</router-link>
            <router-link class="navbar-item is-tab" to="/login" exact>Login</router-link>
        </div>
    </nav>
</template>
