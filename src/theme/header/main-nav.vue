<template>
    <ul class="nav-wrapper level-left">
        <router-link class="navbar-item skew-20 level-item" to="/about">About</router-link>
        <router-link class="navbar-item skew-20 level-item" to="/category/apps">Apps</router-link>
        <router-link class="navbar-item skew-20 level-item" :to="{ name : 'category', params : { id : 'vr' } }">VR</router-link>
        <router-link class="navbar-item skew-20 level-item" to="/project">Projects</router-link>
        <router-link class="navbar-item skew-20 level-item" to="/blog">Blog</router-link>
        <router-link class="navbar-item skew-20 level-item" to="/friends">Friends</router-link>
        <router-link class="navbar-item skew-20 level-item" to="/stuff">Stuff</router-link>
    </ul>
</template>
<style lang="scss">
    @import '../../styles/global.scss';
    #nav-main {
        .nav-wrapper {
            margin-bottom: 0;
            padding-right: 2.5em;
            -webkit-padding-start: 2.5em;
            /* Tablet */
            @media (max-width: $tabletSize) {
                width: 542px;
                margin: auto;
                padding: 0;
            }
            /* Mobile */
            @media (max-width: $mobileSize) {
                width: 100%;
                text-align: center;
            }
            a {
                text-decoration: none;
            }
            .navbar-item {
                line-height: 0.4em;
                display: inline-block;
                text-transform: uppercase;
                &:first-child {
                    border-left: 2px solid $borderColor;
                }
                &:last-child {
                    border-right: 2px solid $borderColor;
                }
                color: white;

                border-bottom: 2px solid $borderColor;
                border-top: 2px solid $borderColor;
                border-left: 1px solid $borderColor;

                border-radius: 0%;
                transition: 0.5s;
                padding: 1.5rem;
                margin: 0;
                /* Desktop Only */
                @media (min-width: $mobileSize) {
                    &:hover {
                        cursor: pointer;
                        background-color: $highlightColor;
                        color: black;
                    }
                }
                &:active {
                    cursor: pointer;
                    transition: 0.1s;
                    background-color: $activeColor;
                    color: black;
                }
                &.router-link-exact-active {
                    line-height: 0em;
                    background-color: white;
                    color: black;
                }
                @media (max-width: 580px) {
                    background-color: $backgroundColorMobile;
                    color: $textColorMobile;
                    padding: 1em;
                    height: auto;
                    font-size: 8pt;
                }
            }
        }
    }
</style>
