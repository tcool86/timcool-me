<template>
    <div class="project-title title-text skew-20 backdrop-red">
        <h2 class="skew-minus-20">{{ title }}</h2>
    </div>
</template>
<script>
    export default {
        props : ['title']
    }
</script>
<style lang="scss">
    @import '../../../styles/style-vars.scss';
    .project-title {
        position: relative;
        top: -1rem;
        left: -3rem;

        padding-left: 4rem;
        margin-bottom: 0.5rem;
        border: 0.1rem $titleBackgroundColor solid;

        min-width: auto;
        width: 64%;

        h2 {
            width: 100%;

            font-size: 32pt;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        @media (max-width: $mobileSize) {
            padding-left: 0.5rem;

            width: 100%;
            h2 {
                text-indent: 0.5rem;
                font-size: 16pt;
                text-shadow: black 0 0 2px,
                             black 0 0 2px,
                             black 0 0 2px;
            }
        }
    }
</style>
