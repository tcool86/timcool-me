<template>
    <div class="navigation-container noselect">
        <div class="mobile-menu" v-on:click="mobileMenuTapped" ref="menuIcon">
            <svgicon icon="menu" class="clickable"></svgicon>
        </div>
        <transition name="fade-out" mode="out-in" v-on:enter="setListItemActive">
            <ul :class="menuClasses" 
                v-on:click="setListItemActiveClick"
                ref="menuList">
                <li aria-label="show about" class="menu-item">
                    <router-link class="navigation-item" to="/about">About</router-link>
                </li>
                <li aria-label="show resume" class="menu-item">
                    <router-link class="navigation-item" to="/work">Work Exp</router-link>
                </li>
                <li aria-label="show projects" class="menu-item">
                    <router-link class="navigation-item" to="/projects">Projects</router-link>
                </li>
                <li aria-label="show blog" class="menu-item">
                    <router-link class="navigation-item" to="/blog">Blog</router-link>
                </li>
                <li aria-label="show extra" class="menu-item">
                    <router-link class="navigation-item" to="/extra">Extra</router-link>
                </li>
            </ul>
        </transition>
    </div>
</template>
<script>
    import Media from 'vue-media'
    import { userAgent } from '../utility/user-agent.js'
    import '../icons'

    const menuClasses = ['navigation-menu', 'site-nav', 'backdrop-sky']
    const routerActiveClass = 'is-active'
    const listItemActiveClass = 'active'

    export default {
        mixins : [userAgent.mobileClassMixin],
        data : function () {
            return {
                'showMenu' : true,
                'menuClasses' : menuClasses,
                'activeItem' : 0
            }
        },
        methods : {
            mobileMenuTapped : function (event) {
                this.showMenu = !this.showMenu
                if (this.showMenu) {
                    this.$refs.menuIcon.style.transform = 'translateX(0)'
                    this.$refs.menuList.style.transform = 'translateX(0)'
                } else {
                    this.$refs.menuIcon.style.transform = 'translateX(-50vw)'
                    this.$refs.menuList.style.transform = 'translateX(-50vw)'
                }
            },
            setListItemActive : function () {
                let listItems = this.$refs.menuList.querySelectorAll('li')
                listItems.forEach((item) => {
                    let routerLink = item.firstElementChild
                    let linkClasses = routerLink.className.split(' ')
                    if (linkClasses.includes(routerActiveClass)) {
                        item.className = listItemActiveClass
                    } else {
                        item.className = 'menu-item'
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
                    li.className = 'menu-item'
                })
                listItem.parentElement.className = listItemActiveClass
            }
        },
        components : {
            Media
        },
        mounted () {
            this.setListItemActive()
            this.$refs.menuIcon.style.transform = 'translateX(-50vw)'
            menuClasses.push(this.mobileClassWrapper('menu'))
        },
        watch : {
            $mq (newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (newValue === 'desktop') {
                        this.$refs.menuIcon.style.transform = 'translateX(0)'
                        this.$refs.menuList.style.transform = 'translateX(0)'
                    }
                }
            }
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
        transition: all 0.33s;
        svg {
            width: 2em;
            height: 2em;

            fill: white;
        }
    }
    .navigation-menu {
        justify-content: flex-start;
        position: fixed;
        display: flex;

        padding: 2rem 4rem;
        width: 100%;

        background-color: $backgroundColor;
        
        &.menu--mobile {
            height: 100vh;
            li {
                margin-bottom: 3rem;
                font-size: xx-large;
            }
        }
    }

    @include desktop {
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
        li {
            transition: all .33s;
            &.menu-item:hover {
                transform: translate(-4px,-4px);
            }
            &.active {
                transform: translate(-4px,-4px);
            }
        }
    }
    @include mobile {
        .navigation-container {
            display: flex;
            width: 100vw;
            flex-direction: row-reverse;
        }
        .mobile-menu {
            display: block;
            position: relative;
            left: 20px;
            top: 20px;
            flex: 1;
            height: 4em;
        }
        .navigation-menu {
            flex-direction: column;
            align-items: flex-start;
            position: sticky;
            top: 0;
            right: 0;
            padding: 0;
            border-radius: 0;
            z-index: 400;
            height: 100vh;
            width: 50vw;
            transform: translateX(-50vw);
            transition: all 0.33s;
            li {
                margin-top: 8px;
                padding: 1em;
                
                width: 100%;
                
                font-size: 1em;
                white-space: nowrap;
                a {
                    padding: 1em;

                    width: 100%;

                    text-transform: uppercase;
                    color: black;
                    font-weight: bold;
                    font-size: xx-large;
                }
            }
        }
    }
</style>

