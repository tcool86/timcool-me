<template>
    <div class="portfolio-container">
        <h1 class="content-title">Portfolio</h1>
        <div class="protfolio-section-wrapper columns">
            <div class="column is-half is-offset-one-quarter">
                <section id="portfolio-section" class="columns level">
                    <div class="column has-text-centered">
                        <div tabindex="0"
                            :class="determinButtonActive(resumeKey)" 
                            aria-label="click to show resume" 
                            v-on:click="currentSection = resumeKey"
                            v-on:keyup.enter="currentSection = resumeKey">
                            <span>Resume</span>
                        </div>
                        <div tabindex="0"
                            :class="determinButtonActive(projectsKey)" 
                            aria-label="click to show projects" 
                            v-on:click="currentSection = projectsKey"
                            v-on:keyup.enter="currentSection = projectsKey">
                            <span>Projects</span>
                        </div>
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
    // import projectSection from './project-section.vue'
    import resume from './resume/resume.vue'

    const fetchInitialData = (store, route) => {
        return store.dispatch('projectsModule/updateProjects')
    }

    export default {
        components : {
            // 'project-section' : projectSection,
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
            },
            determinButtonActive (key) {
                if (key === this.currentSection) {
                    return 'button button--active'
                }
                return 'button'
            }
        },
        created () {
            this.prefetchProjects()
            this.currentSection = this.checkForDeeplink(this.$route)
        }
    }
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
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
    #portfolio-section {
        margin: 5rem 2rem;
        .button {
            margin: 0 0.5rem;
        }
    }
    .button {
        min-width: 8rem;
        height: 3.5rem;
        transition: all 0.33s;
        background-color: $backgroundColor;
        span {
            text-transform: uppercase;
            font-family: 'Exo 2';
            font-size: 1rem;
            color: whitesmoke;
        }
        &:hover {
            span {
                color: black;
            }
            background-color: $highlightColor;
        }
        &:active {
            background-color: $activeColor;
        }
    }
    .button--active {
        span {
            color: black;
        }
        background-color: white;
    }
</style>
