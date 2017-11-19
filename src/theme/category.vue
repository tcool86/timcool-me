<template>
    <div class="columns">
        <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
            <app-post :link='post.link'>
                <h3 slot="title" v-html="post.title.rendered"></h3>
                <span slot="content" v-html="post.content.rendered"></span>
            </app-post>
        </div>
    </div>
</template>
<script>
    import post from './post.vue'
    import { mapGetters } from 'vuex'

    const fetchInitialData = (store, route) => {
        let categoryId = 2
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
