<template>
    <div class="project-image">
        <img :src="project.icon" :alt="project.iconAlt" />
    </div>
</template>
<script>
    export default {
        props : ['project']
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/style-vars.scss';
    .project-image {
        display: block;
        img {
            min-width: 144px;
            min-height: 144px;
            max-width: 144px;
            max-height: 144px;
            @media (max-width: $mobileSize) {
                min-width: 72px;
                min-height: 72px;
                max-width: 72px;
                max-height: 72px;
            }
        }
        @media (max-width: $mobileSize) {
            display: flex;
            align-items: center;
        }
    }
</style>
