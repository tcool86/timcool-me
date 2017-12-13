<template>
    <div class="blog-posts container is-fluid">
        <h1 class="content-title">Blog</h1>
        <div class="list-group-item" v-for="(post, title) in posts" v-bind:key="post.id">
            <article class="post-wrapper media">
                <section class="image-wrapper media-left">
                    <div class="post-image"></div>
                </section>
                <section class="content-wrapper media-content">
                    <div class="title-wrapper skew-20">
                        <h2 class="blog-title" v-html="post.title.rendered"></h2>
                    </div>
                    <div class="topics">
                        <a href="?filter=vr">
                            <svgicon icon="oculus" class="icon-large clickable oculus-color"></svgicon>
                        </a>
                        <a href="?filter=steam">
                            <svgicon icon="steam" class="icon-large clickable steam-color"></svgicon>
                        </a>
                        <a href="?filter=windows">
                            <svgicon icon="windows" class="icon-large clickable windows-color"></svgicon>
                        </a>
                    </div>
                    <div class="text-wrapper">
                        <span v-html="post.content.rendered"></span>
                    </div>
                </section>
            </article>
            <br/>
        </div>
    </div>
</template>
<script>
    import post from './post.vue'
    import { mapGetters } from 'vuex'

    const fetchInitialData = (store, route) => {
        let filterId = 0
        if (typeof route.query.filter !== 'undefined') {
            let filter = route.query.filter
            if (filter === 'apps') {
                filterId = 2
            }
            if (filter === 'vr') {
                filterId = 6
            }
            if (filter === 'steam') {
                filterId = 3
            }
        }
        return store.dispatch('postsModule/updateCategory', filterId)
    }

    export default {
        asyncData (store, route) {
            return fetchInitialData(store, route)
        },
        components : {
            'app-post' : post
        },
        computed : {
            ...mapGetters('postsModule', ['posts'])
        },
        methods : {
            loadPosts () {
                fetchInitialData(this.$store, this.$route)
            }
        },
        watch : {
            '$route' (to, from) {
                this.loadPosts()
            }
        },
        created () {
            this.loadPosts()
        }
    }
</script>
<style lang="scss">
    @import '../styles/style-vars.scss';
    .post-wrapper {
        h1 {
            color: #000;
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 1px 0 rgb(128, 141, 147), -1px 0 0 rgb(205, 210, 213), -1px 2px 0 rgb(128, 141, 147), -2px 1px 0 rgb(205, 210, 213), -2px 3px 0 rgb(128, 141, 147), -3px 2px 0 rgb(205, 210, 213), -3px 4px 0 rgb(128, 141, 147), -4px 3px 0 rgb(205, 210, 213);
        }
        .title-wrapper {
            background-color: $titleBackgroundColor;
            text-align: center;
            width: 50%;
            padding: 1rem;
            margin-left: 1.75rem;
            border-radius: 8px;
            border-color: $color1;
            border-width: 0.25rem;
            border-style: solid;
            top: 1rem;
            position: relative;
            @media (max-width: $tabletSize) {
                width: auto;
                margin-right: 1.75rem;
            }
        }
        .text-wrapper {
            background-color: $color2;
            border-color: $color1;
            border-width: 0.25rem;
            border-style: solid;
            border-radius: 8px;
            padding: 2rem;
            p {
                &:first-child {
                    text-indent: 4rem;
                }
                strong {
                    color: white;
                }
            }
        }
        .topics {
            background-color: $color1;
            float: right;
            bottom: 1.5rem;
            position: relative;
            right: 2rem;
            border: 2px solid;
            border-radius: 4px;
            border-color: #3B0908;
            padding: 0.25rem;
            padding-right: 0.5rem;
            @media (max-width: $tabletSize) {
                float: left;
                position: relative;
                bottom: 0;
                right: 0;
                margin-bottom: 0.5rem;
            }
        }
    }
    .list-group-item {
        opacity: 0;
        -webkit-animation: fadeIn linear 0.5s both;
        animation: fadeIn linear 0.5s both;
    }
</style>
