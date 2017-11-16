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
    import { mapGetters } from 'vuex'
    import post from './post.vue'
    export default {
        components : {
            'app-post' : post
        },
        computed : {
            ...mapGetters('postsModule', ['posts'])
        },
        methods : {
            loadPosts () {
                let categoryId = 2
                if (this.$route.params.id === 'apps') {
                    categoryId = 2
                }
                if (this.$route.params.id === 'vr') {
                    categoryId = 6
                }
                this.$store.dispatch('postsModule/updateCategory', categoryId)
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
