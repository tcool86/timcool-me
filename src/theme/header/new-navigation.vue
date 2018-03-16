<template>
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
</template>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    .navigation-menu {
        display: flex;
        justify-content: flex-start;
        position: fixed;

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

