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
    import appServices from '../app.service.js'
    export default {
        components : {
            'app-post' : post
        },
        data () {
            return {
                id : this.$route.params.id,
                posts : []
            }
        },
        methods : {
            loadPosts () {
                let categoryId = 2
                if (this.id === 'apps') {
                    categoryId = 2
                }
                if (this.id === 'vr') {
                    categoryId = 6
                }
                appServices.getPosts(categoryId).then(data => {
                    this.posts = data
                })
            }
        },
        watch : {
            '$route' (to, from) {
                this.id = to.params.id
                this.loadPosts()
            }
        },
        created () {
            this.loadPosts()
            console.log(this.$route.query.page)
        }
    }
</script>
