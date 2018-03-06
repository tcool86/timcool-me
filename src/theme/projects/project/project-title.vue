<template>
    <div class="project-title title-text skew-20 backdrop-red ">
        <h2 class="skew-minus-20">{{ title }}</h2>
    </div>
</template>
<script>
    export default {
        props : ['title']
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/global.scss';
    .project-title {
        position: relative;
        top: -1rem;
        left: -3rem;

        padding-left: 4rem;
        margin-bottom: 0.5rem;
        border: 0.1rem $titleBackgroundColor solid;

        min-width: fit-content;
        width: 64%;
        height: min-content;

        text-overflow: ellipsis;
        white-space: nowrap;

        h2 {
            font-size: 32pt;
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
