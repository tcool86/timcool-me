<template>
    <div id="nav-main">
        <nav class="navigation" ref="staticmenu" v-bind:style="staticStyles">
            <main-nav v-if="showMenu"></main-nav>
            <media :query="{minWidth: 1158}">
                <social-links></social-links>
            </media>
        </nav>
    </div>
</template>
<script>
    import mainNavigation from './new-navigation.vue'
    import socialLinks from './social-links.vue'
    import Media from 'vue-media'
    
    export default {
        components : {
            'main-nav' : mainNavigation,
            'social-links' : socialLinks,
            Media
        },
        data : function () {
            return {
                scrollDown : false,
                resizeWidth : 0,
                showMenu : true
            }
        },
        computed : {
            styles : function () {
                const isVisible = this.scrollDown ? 'flex' : 'none'
                var styles = {
                    'display' : isVisible
                }
                if (this.scrollDown) {
                    const leftPos = this.getMenuLeftPosition()
                    const width = this.getMenuWidth()
                    const resizeWidth = this.resizeWidth
                    styles['left'] = leftPos + 'px'
                    if (resizeWidth < 1158) {
                        styles['width'] = '100%'
                    } else {
                        styles['width'] = width + 'px'
                    }
                    styles['animation'] = 'pushDown 0.5s ease-out'
                }
                return styles
            },
            staticStyles : function () {
                var styles = {}
                if (this.scrollDown) {
                    styles['transition'] = '0.5s'
                    styles['opacity'] = '0'
                }
                return styles
            }
        },
        methods : {
            handleScrollEvent : function (event) {
                const menuHeight = 2
                if (window.scrollY >= menuHeight) {
                    this.$data.scrollDown = true
                } else {
                    this.$data.scrollDown = false
                }
            },
            getMenuLeftPosition : function () {
                const staticMenu = this.$refs.staticmenu
                return staticMenu.offsetLeft
            },
            getMenuWidth : function () {
                const staticMenu = this.$refs.staticmenu
                return staticMenu.offsetWidth
            },
            updateNavigationMenus : function () {
                this.$data.resizeWidth = window.document.body.clientWidth
            }
        },
        created () {
            if (typeof window !== 'undefined') {
                window.addEventListener('scroll', this.handleScrollEvent, {passive : true})
                window.addEventListener('resize', this.updateNavigationMenus, {passive : true})
            }
        },
        destroyed () {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', this.handleScrollEvent)
                window.removeEventListener('resize', this.updateNavigationMenus)
            }
        }
    }
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    .navigation {
        display: flex;
        flex-direction: column;
    }
    @media (max-width: $tabletSize) {
        .navigation {
            align-items: flex-end;
            align-self: flex-start;
        }
    }
</style>

