<template>
    <footer class="footer">
        <media :query="{maxWidth: 1158}">
            <social-links class="level is-mobile"></social-links>
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
