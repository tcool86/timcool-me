<template>
    <div class="resume-container">
        <h1 class="content-title">Work Experience</h1>
        <resume-job></resume-job>
    </div>
</template>
<script>
    import resumeJob from './resume-job.vue'

    export default {
        data : function () {
            return {
                scrollY : 0,
                scrollTimeout : null
            }
        },
        components : {
            'resume-job' : resumeJob
        },
        methods : {
            handleScrollEvent : function (event) {
                this.$data.scrollY = window.scrollY
            }
        },
        created () {
            if (typeof window !== 'undefined') {
                window.addEventListener('scroll', this.handleScrollEvent, {passive : true})
            }
        },
        destroyed () {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', this.handleScrollEvent)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../styles/style-vars.scss';
    @import '../../styles/tech-icon-sprites.scss';
</style>
