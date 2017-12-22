<template>
    <div class="portfolio-container">
        <h1 class="content-title">Portfolio</h1>
        <div class="protfolio-section-wrapper columns">
            <div class="column is-half is-offset-one-quarter">
                <section id="portfolio-section" class="columns level">
                    <div class="column level-item has-text-centered">
                        <h2 class="button">Business</h2>
                    </div>
                    <div class="column level-item has-text-centered">
                        <h2 class="button">Projects</h2>
                    </div>
                </section>
            </div>
        </div>
        <section id="project-section">
            <div class="project-container" v-for="project in projects" v-bind:key="project._id">
                <project :project="project"></project>
            </div>
        </section>
    </div>
</template>
<script>
    import project from './project.vue'
    import { mapGetters } from 'vuex'

    const fetchInitialData = (store, route) => {
        return store.dispatch('projectsModule/updateProjects')
    }

    export default {
        asyncData (store, route) {
            return fetchInitialData(store, route)
        },
        components : {
            'project' : project
        },
        computed : {
            ...mapGetters('projectsModule', ['projects'])
        },
        methods : {
            loadProjects () {
                fetchInitialData(this.$store, this.$route)
            }
        },
        watch : {
            '$route' (to, from) {
                this.loadProjects()
            }
        },
        created () {
            this.loadProjects()
        }
    }
</script>

<style lang="scss">
    @import '../styles/style-vars.scss';

    #portfolio-section {
        margin-top: 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    @mixin projectFadeIn($n) {
        &:nth-child(#{$n}) {
            -moz-animation-duration: (0.5 + $n/4)s;
            -webkit-animation-duration: (0.5 + $n/4)s;
        }
    }

    .project-container {
        margin: 1em;
        margin-top: 2em;
        position: relative;
        animation-duration: 0.5s;
        -moz-animation-duration: 0.5s;
        -webkit-animation-duration: 0.5s;
        transition: top, opacity;
        -moz-transition: top, opacity;
        -webkit-transition: top, opacity;
        -moz-animation-name: pushUp;
        -webkit-animation-name: pushUp;
    }
</style>
