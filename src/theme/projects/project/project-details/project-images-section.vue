<template>
    <div class="project-images-container">
        <div class="project-image-container no-focus" v-for="image in images" v-bind:key="image.image">
            <a :href="image.image" data-fancybox="projectImages" :data-caption="image.caption">
                <img class="project-image" :src="image.thumb">
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['images']
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
