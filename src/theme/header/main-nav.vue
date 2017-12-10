<template>
    <ul class="nav-wrapper level-left">
        <li>
            <router-link class="navbar-item skew-20 level-item" to="/about">About</router-link>
        </li>
        <li>
            <router-link class="navbar-item skew-20 level-item" to="/portfolio">Portfolio</router-link>
        </li>
        <li>
            <router-link class="navbar-item skew-20 level-item" to="/blog">Blog</router-link>
        </li>
        <li>
            <router-link class="navbar-item skew-20 level-item" to="/friends">Friends</router-link>
        </li>
        <li>
            <router-link class="navbar-item skew-20 level-item" to="/stuff">Stuff</router-link>
        </li>
    </ul>
</template>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    #nav-main {
        pointer-events: none;
        .nav-wrapper {
            li {
                display: inline-block;
                width: min-content;
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
                border-bottom: 2px solid $borderColor;
                border-top: 2px solid $borderColor;
                border-left: 1px solid $borderColor;
                border-radius: 0%;
                transition: 0.5s;
                padding: 1.5rem;
                &:first-child {
                    border-left: 2px solid $borderColor;
                }
                &:last-child {
                    border-right: 2px solid $borderColor;
                }
                &:active {
                    cursor: pointer;
                    transition: 0.1s;
                    background-color: $activeColor;
                    color: black;
                }
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
                //width: 542px;
                margin: auto;
                padding: 0;
            }
            /* Mobile */
            @media (max-width: $mobileSize) {
                //width: 400px;
                text-align: center;
            }
        }
    }
</style>
