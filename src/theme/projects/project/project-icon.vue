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
    .project {
        &:hover {
            .project-image {
                img {
                    @include coolShadowLight();
                    transform: translate(-0.5rem,-0.5rem);
                }
            }
        }
    }
    .project-image {
        position: relative;
        top: -1rem;
        display: flex;
        align-items: center;
        
        @media (max-width: $mobileSize) {
            top: 0;
        }
        img {
            border: 0.1rem $backgroundColor solid;
            border-radius: 20%;

            min-width: 144px;
            min-height: 144px;
            max-width: 144px;
            max-height: 144px;

            z-index: $mainground;
            
            &:hover {
                cursor: pointer;
            }

            transition: all 0.33s;

            @media (max-width: $mobileSize) {
                min-width: 72px;
                min-height: 72px;
                max-width: 72px;
                max-height: 72px;
            }
        }
    }
</style>
