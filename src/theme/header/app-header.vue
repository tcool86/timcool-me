<template>
    <nav id="nav-main" class="level container">
        <main-nav></main-nav>
        <media :query="{minWidth: 1158}">
            <social-links class="level-right"></social-links>
        </media>
    </nav>
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
        }
    }
</script>

