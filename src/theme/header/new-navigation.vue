<template>
    <div class="navigation-container">
        <div class="mobile-menu">
            <svgicon icon="menu" class="icon-large clickable"></svgicon>
        </div>
        <ul class="navigation-menu site-nav backdrop-sky">
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
    </div>
</template>
<script>
    import '../icons'
    export default {
    
    }
</script>

<style lang="scss">
    @import '../../styles/style-vars.scss';
    .mobile-menu {
        display: none;
    }
    .navigation-menu {
        justify-content: flex-start;
        position: fixed;
        display: flex;

        padding: 2rem 4rem;
        width: 100%;

        background-color: $backgroundColor;
    }
    .navigation-item {
        margin: 2px;
        padding: 1rem 1.5rem;

        color: black;
        border: 1px solid transparent;
        border-radius: 4px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;

        font-weight: bold;
        text-transform: uppercase;

        transition: 0.33s;
        &:hover {
            border: 1px solid silver;
            
            background-color: $highlightColor;
            color: black;

            cursor: pointer;
        }
        &:active {
            background-color: $activeColor;
            color: black;

            cursor: pointer;
        }
        &.router-link-exact-active {
            background-color: white;
            color: black;
        }
    }
    @media (max-width: $tabletSize) {
        .mobile-menu {
            position: relative;
            right: 1rem;
            top: 1rem;
            display: block;
        }
        .navigation-menu {
            flex-direction: column;
            align-items: flex-start;
            display: none;
        }
        .navigation-item {
            padding: 0.5rem;

            line-height: 2rem;
        }
    }
</style>

