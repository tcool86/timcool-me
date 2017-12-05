<template>
    <div class="blog-posts container is-fluid">
        <h1 class="content-title">Blog</h1>
        <div class="list-group-item noselect" v-for="(post, title) in posts" v-bind:key="post.id">
            <article class="post-wrapper media">
                <section class="image-wrapper media-left">
                    <div class="post-image"></div>
                </section>
                <section class="content-wrapper media-content">
                    <h2 class="blog-title" v-html="post.title.rendered"></h2>
                    <span v-html="post.content.rendered"></span>
                </section>
                <section class="topics media-right">
                    <h3>VR &amp; Stuff</h3>
                </section>
            </article>
        </div>
    </div>
</template>
<script>
    import post from './post.vue'
    import { mapGetters } from 'vuex'

    const fetchInitialData = (store, route) => {
        let categoryId = 6
        if (route.params.id === 'apps') {
            categoryId = 2
        }
        if (route.params.id === 'vr') {
            categoryId = 6
        }
        return store.dispatch('postsModule/updateCategory', categoryId)
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
    .post-wrapper {
        h1 {
            color: #000;
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 1px 0 rgb(128, 141, 147), -1px 0 0 rgb(205, 210, 213), -1px 2px 0 rgb(128, 141, 147), -2px 1px 0 rgb(205, 210, 213), -2px 3px 0 rgb(128, 141, 147), -3px 2px 0 rgb(205, 210, 213), -3px 4px 0 rgb(128, 141, 147), -4px 3px 0 rgb(205, 210, 213);
        }
    }
    .list-group-item {
        opacity: 0;
        -webkit-animation: fadeIn linear 0.5s both;
        animation: fadeIn linear 0.5s both;
    }
</style>
