<template>
    <div class="portfolio-container">
        <h1 class="content-title">Portfolio</h1>
        <div class="protfolio-section-wrapper columns">
            <div class="column is-half is-offset-one-quarter">
                <section id="portfolio-section" class="columns level">
                    <div class="column level-item has-text-centered">
                        <h2 class="button" v-on:click="currentSection = 'resume'">Resume</h2>
                    </div>
                    <div class="column level-item has-text-centered">
                        <h2 class="button" v-on:click="currentSection = 'project-section'">Projects</h2>
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

    export default {
        components : {
            'project-section' : projectSection,
            'resume' : resume
        },
        data : function () {
            return {
                'currentSection' : 'resume'
            }
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
