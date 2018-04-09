<template>
    <div class="navigation-container noselect">
        <div class="mobile-menu" v-on:click="mobileMenuTapped">
            <svgicon icon="menu" class="icon-large clickable"></svgicon>
        </div>
        <media :query="{maxWidth: 1158}"
            @media-enter="enterMobile"
            @media-leave="leaveMobile">
        </media>
        <transition name="fade-out" mode="out-in" v-on:enter="setListItemActive">
            <ul :class="menuClasses" 
                v-if="showMenu"
                v-on:click="setListItemActiveClick"
                ref="menuList">
                <li aria-label="show about">
                    <router-link class="navigation-item" to="/about">About</router-link>
                </li>
                <li aria-label="show resume">
                    <router-link class="navigation-item" to="/resume">Work Exp</router-link>
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
    const routerActiveClass = 'is-active'
    const listItemActiveClass = 'active'

    export default {
        data : function () {
            return {
                'showMenu' : true,
                'menuClasses' : menuClasses,
                'activeItem' : 0
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
            setListItemActive : function () {
                let listItems = this.$refs.menuList.querySelectorAll('li')
                listItems.forEach((item) => {
                    let routerLink = item.firstElementChild
                    let linkClasses = routerLink.className.split(' ')
                    if (linkClasses.includes(routerActiveClass)) {
                        item.className = listItemActiveClass
                    } else {
                        item.className = ''
                    }
                })
            },
            setListItemActiveClick : function (event) {
                let listItem = event.target
                if (listItem.nodeName !== 'A') {
                    event.stopPropagation()
                    return
                }
                this.$refs.menuList.querySelectorAll('li').forEach((li) => {
                    li.className = ''
                })
                listItem.parentElement.className = listItemActiveClass
            }
        },
        components : {
            Media
        },
        mounted () {
            this.setListItemActive()
        }
    }
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    .navigation-container {
        z-index: $peakground;
    }
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

            box-shadow: 4px 4px 8px silver;

            cursor: pointer;
        }
        &:active {
            background-color: $activeColor;
            color: black;

            cursor: pointer;
        }
        &.is-active {
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
            top: 5rem;
            right: 0;

            padding: 1rem;
            border-radius: 12px;

            z-index: $peakground;
        }
        .navigation-item {
            padding: 0.5rem;

            line-height: 2rem;
        }
    }
</style>

