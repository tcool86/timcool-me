<template>
    <nav id="nav-main" class="level container">
        <main-nav></main-nav>
        <social-links></social-links>
    </nav>
</template>
<script>
    import mainNavigation from './main-nav.vue'
    import socialLinks from './social-links.vue'
    import '../icons'
    export default {
        components : {
            'main-nav' : mainNavigation,
            'social-links' : socialLinks
        }
    }
</script>

