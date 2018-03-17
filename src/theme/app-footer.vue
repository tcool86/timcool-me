<template>
    <footer class="footer-with-social">
        <media :query="{maxWidth: 1158}">
            <social-links class="social-links level is-mobile"></social-links>
        </media>
        <div class="container">
            <div class="content has-text-centered">
                Copyright &copy; 2018 Timothy Cool 
            </div>
        </div>
    </footer>
</template>
<script>
    import socialLinks from './header/social-links.vue'
    import Media from 'vue-media'

    export default {
        components : {
            'social-links' : socialLinks,
            Media
        }
    }
</script>
<style lang="scss">
    .social-links.is-mobile {
        margin: auto;
        
        max-width: 400px;
    }
</style>

