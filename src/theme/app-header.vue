<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <router-link to="/">
                <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
            </router-link>
            <router-link class="navbar-item is-tab" to="/category/front-end" exact>Home</router-link>
            <router-link class="navbar-item is-tab" to="/login" exact>Login</router-link>
        </div>
    </nav>
</template>
