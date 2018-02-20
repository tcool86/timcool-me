<template>
    <ul class="nav-wrapper site-nav level-left">
        <li class="" aria-label="show about">
            <router-link class="navbar-item level-item" to="/about">About</router-link>
        </li>
        <li class="" aria-label="show portfolio">
            <router-link class="navbar-item level-item" to="/portfolio">Portfolio</router-link>
        </li>
        <li class="" aria-label="show blog">
            <router-link class="navbar-item level-item" to="/blog">Blog</router-link>
        </li>
        <!-- <li class="skew-20" aria-label="show friend sites">
            <router-link class="navbar-item level-item" to="/friends">Friend Sites</router-link>
        </li> -->
        <!-- <li class="skew-20">
            <router-link class="navbar-item level-item" to="/stuff">Stuff</router-link>
        </li> -->
    </ul>
</template>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    #nav-main {
        pointer-events: none;
        .nav-wrapper {
            &.site-nav li {
                display: inline-block;
                border-bottom: 2px solid $borderColor;
                border-top: 2px solid $borderColor;
                border-left: 1px solid $borderColor;
                &:first-child {
                    border-left: 2px solid $borderColor;
                }
                &:last-child {
                    border-right: 2px solid $borderColor;
                }
                @media (max-width: $mobileSize) {
                    margin: -3px;
                }
            }
            pointer-events: auto;
            z-index: 1;
            transition: all 0.15s ease-out;
            a {
                text-decoration: none;
            }
            .navbar-item {
                margin-right: 0;
                line-height: 0.4em;
                display: inline-block;
                text-transform: uppercase;
                color: white;
                background-color: $backgroundColor;
                transition: 0.33s;
                padding: 1.5rem;
                &.router-link-exact-active {
                    line-height: 0;
                    background-color: white;
                    color: black;
                }
                /* Desktop Only */
                @media (min-width: $tabletSize) {
                    &:hover {
                        cursor: pointer;
                        background-color: $highlightColor;
                        color: black;
                    }
                    &:active {
                        cursor: pointer;
                        background-color: $activeColor;
                        color: black;
                    }
                }
                @media (max-width: $mobileSize) {
                    background-color: $backgroundColorMobile;
                    color: $textColorMobile;
                    padding: 1rem;
                    font-size: 8pt;
                }
            }
            /* Tablet */
            @media (max-width: $tabletSize) {
                margin: auto;
                padding: 0;
            }
            /* Mobile */
            @media (max-width: $mobileSize) {
                text-align: center;
            }
        }
    }
</style>
