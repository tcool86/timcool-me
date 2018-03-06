<template>
    <div class="project-description">{{ description }}</div>
</template>
<script>
    export default {
        props : ['description']
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/global.scss';
    .project-description {
        margin-left: 1rem;

        max-width: 64%;
        max-height: 2.8rem;

        font-size: 12pt;
        line-height: 1.4rem;

        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: $mobileSize) {
            margin-left: 0.5rem;

            max-width: 90%;
            max-height: fit-content;
            min-height: 4rem;

            font-size: 10pt;
        }
    }
</style>
