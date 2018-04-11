<template>
    <div class="project-description">{{ description }}</div>
</template>
<script>
    export default {
        props : ['description']
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/style-vars.scss';
    .project-description {
        margin: -0.5rem 0 1rem 0.5rem;

        max-width: 72%;
        min-width: 50%;

        font-size: 14pt;
        line-height: 1.4rem;

        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: $mobileSize) {
            margin-bottom: 0;

            max-width: 90%;
            min-height: 50px;
        }
    }
</style>
