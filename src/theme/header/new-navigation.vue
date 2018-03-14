<template>
    <ul class="navigation-menu site-nav level-left">
        <li aria-label="show about">
            <router-link class="navigation-item" to="/about">About</router-link>
        </li>
        <li aria-label="show resume">
            <router-link class="navigation-item" to="/resume">Resume</router-link>
        </li>
        <li aria-label="show projects">
            <router-link class="navigation-item" to="/projects">Projects</router-link>
        </li>
        <li aria-label="show blog">
            <router-link class="navigation-item" to="/blog">Blog</router-link>
        </li>
        <li aria-label="show extra">
            <router-link class="navigation-item" to="/extra">Extra</router-link>
        </li>
    </ul>
</template>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    .navigation-menu {
        display: flex;
        justify-content: space-around;
    }
    .navigation-item {
        padding: 1.5rem;

        text-transform: uppercase;

        transition: 0.33s;
    }
    @media (max-width: $tabletSize) {
        .navigation-menu {
            flex-direction: column;
            align-items: flex-start;
        }
        .navigation-item {
            padding: 0.5rem;

            line-height: 2rem;
        }
    }
</style>

