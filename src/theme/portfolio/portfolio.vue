<template>
    <div class="portfolio-container">
        <h1 class="content-title">Portfolio</h1>
        <div class="protfolio-section-wrapper columns">
            <div class="column is-half is-offset-one-quarter">
                <section id="portfolio-section" class="columns level">
                    <div class="column level-item has-text-centered">
                        <h2 class="button" v-on:click="currentSection = resumeKey">Resume</h2>
                    </div>
                    <div class="column level-item has-text-centered">
                        <h2 class="button" v-on:click="currentSection = projectsKey">Projects</h2>
                    </div>
                </section>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <component v-bind:is="currentSection"></component>
        </transition>
    </div>
</template>
<script>
    import projectSection from './project-section.vue'
    import resume from './resume.vue'

    const fetchInitialData = (store, route) => {
        return store.dispatch('projectsModule/updateProjects')
    }

    export default {
        components : {
            'project-section' : projectSection,
            'resume' : resume
        },
        data : function () {
            return {
                projectsKey : 'project-section',
                resumeKey : 'resume',
                'currentSection' : this.resumeKey
            }
        },
        methods : {
            prefetchProjects () {
                fetchInitialData(this.$store, this.$route)
            },
            checkForDeeplink (route) {
                let deeplink = route.params.deeplink
                if (typeof (deeplink) === 'undefined') {
                    return this.resumeKey
                }
                return this.projectsKey
            }
        },
        created () {
            this.prefetchProjects()
            this.currentSection = this.checkForDeeplink(this.$route)
        }
    }
</script>
<style lang="scss">
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
