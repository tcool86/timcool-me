<template>
    <div id="nav-main">
        <nav class="level container" ref="staticmenu" :key="resizeWidth">
            <main-nav></main-nav>
            <media :query="{minWidth: 1158}">
                <social-links class="level-right"></social-links>
            </media>
        </nav>
        <nav class="level container top-layer" ref="dynamicmenu" :key="resizeWidth" v-bind:style="styles">
            <main-nav></main-nav>
            <media :query="{minWidth: 1158}">
                <social-links class="level-right"></social-links>
            </media>
        </nav>
    </div>
</template>
<script>
    import mainNavigation from './main-nav.vue'
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
                scrollAmount : 0,
                resizeWidth : 0
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
            }
        },
        methods : {
            handleScrollEvent : function (event) {
                const menuHeight = 54
                this.$data.scrollAmount = window.scrollY
                if (window.scrollY >= menuHeight) {
                    this.$data.scrollDown = true
                } else {
                    this.$data.scrollDown = false
                }
            },
            getMenuLeftPosition : function () {
                const elementOffset = this.$refs.staticmenu.offsetLeft
                const parentOffset = this.$refs.staticmenu.parentElement.offsetLeft
                var left = (elementOffset > parentOffset) ? parentOffset : elementOffset
                if (left === 0) {
                    left = (elementOffset > parentOffset) ? elementOffset : parentOffset
                }
                console.log(left)
                return left
            },
            getMenuWidth : function () {
                const elementOffset = this.$refs.staticmenu.offsetWidth
                return elementOffset
            },
            updateNavigationMenus : function () {
                this.$data.resizeWidth = window.document.body.clientWidth
                this.$children.forEach(($child) => {
                    $child.$forceUpdate()
                })
            }
        },
        created () {
            if (typeof window !== 'undefined') {
                window.addEventListener('scroll', this.handleScrollEvent)
                window.addEventListener('resize', this.updateNavigationMenus)
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

</style>


