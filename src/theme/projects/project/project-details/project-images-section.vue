<template>
    <div class="project-images-container">
        <div class="project-image-container" v-for="image in images" v-bind:key="image.image">
            <a :href="image.image" data-fancybox="projectImages" :data-caption="image.caption">
                <img class="project-image" :src="image.image">
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['images'],
        methods : {
            imageClicked : function (event) {
                this.$emit('imageClicked', event)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .project-images-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;

        margin: 4rem 2rem;
    }
    .images-wrapper {
        margin-bottom: 4rem;
    }
    .project-image-container {
        margin: 1rem;

        min-height: 200px;
    }
</style>
