<template>
    <div class="navigation-container">
        <div class="mobile-menu" v-on:click="mobileMenuTapped">
            <svgicon icon="menu" class="icon-large clickable"></svgicon>
        </div>
        <media :query="{maxWidth: 1158}"
            @media-enter="enterMobile"
            @media-leave="leaveMobile">
        </media>
        <transition name="fade-out" mode="out-in">
            <ul :class="menuClasses" v-if="showMenu" v-on:click="setListItemActive" ref="menuList">
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
        </transition>
    </div>
</template>
<script>
    import Media from 'vue-media'
    import '../icons'

    const menuClasses = ['navigation-menu', 'site-nav', 'backdrop-sky']

    export default {
        data : function () {
            return {
                'showMenu' : true,
                'menuClasses' : menuClasses
            }
        },
        methods : {
            enterMobile : function () {
                this.showMenu = false
            },
            leaveMobile : function () {
                this.showMenu = true
            },
            mobileMenuTapped : function (event) {
                this.showMenu = !this.showMenu
            },
            setListItemActive : function (event) {
                this.$refs.menuList.querySelectorAll('li').forEach((li) => {
                    li.className = ''
                })
                let listItem = event.target
                if (listItem.nodeName === 'UL' || listItem.nodeName === 'LI') {
                    event.stopPropagation()
                    return
                }
                listItem.parentElement.className = 'active'
            }
        },
        components : {
            Media
        }
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
        
        li {
            transition: all .33s;
            &:hover {
                transform: translate(-4px,-4px);
            }
            &.active {
                transform: translate(-4px,-4px);
            }
        }
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

            box-shadow: 4px 4px 8px silver;
        }
    }
    @media (max-width: $tabletSize) {
        .mobile-menu {
            position: fixed;
            right: 1rem;
            top: 1rem;
            display: block;
        }
        .navigation-menu {
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            top: 4rem;
            right: 0;

            padding: 1rem;
            border-radius: 12px;

            z-index: 100;
        }
        .navigation-item {
            padding: 0.5rem;

            line-height: 2rem;
        }
    }
</style>

