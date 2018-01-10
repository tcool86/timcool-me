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
        <transition name="fade">
            <div class="spinner-container content" v-if="showSpinner">
                <div class="spinner">
                    <div class="loader"></div>
                </div>
            </div>
        </transition>
        <section id="project-section">
            <div v-bind:class="{ 'project-container' : true, 'push-up-animation' : animateProjects }" v-for="project in projects" v-bind:key="project._id">
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
        data : function () {
            return {
                'showSpinner' : true,
                'animateProjects' : false
            }
        },
        methods : {
            loadProjects () {
                fetchInitialData(this.$store, this.$route)
            },
            updateSpinner () {
                if (this.$store.getters['projectsModule/projects'].length !== 0) {
                    this.showSpinner = false
                } else {
                    this.showSpinner = true
                }
            },
            checkForDeeplink () {
                let deeplink = this.$route.params.deeplink
                if (typeof (deeplink) === 'undefined') {
                    this.animateProjects = true
                }
            }
        },
        watch : {
            '$route' (to, from) {
                this.loadProjects()
            },
            'projects' () {
                this.updateSpinner()
            }
        },
        created () {
            this.checkForDeeplink()
            this.loadProjects()
            this.updateSpinner()
        }
    }
</script>
<style lang="scss">
    @import '../styles/style-vars.scss';
    .spinner-container {
        height: 10rem;
        background-color: $backgroundColor;
        width: 100%;
        display: grid;
        .v-spinner {
            margin: auto;
        }
    }
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
    }

    .push-up-animation {
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
