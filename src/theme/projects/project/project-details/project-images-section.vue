<template>
    <div class="project-images-container">
        <div class="project-image-container" v-for="image in images" v-bind:key="image.image">
            <figure v-on:click="imageClicked" v-on:keyup.enter="imageClicked" tabindex="0">
                <img class="project-image" :src="image.image">
                <figcaption>
                    {{ image.caption }}
                </figcaption>
            </figure>
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
    figure {
        position: relative;
        display: block;

        margin: auto;

        cursor: pointer;
        img {
            position: relative;
            border: 1px solid;

            min-width: 200px;
            max-width: 300px;
            min-height: 200px;
            max-height: 300px;
        }
    }
    figcaption {
        position: absolute;
        left: 0;
        bottom: 11px;
        
        padding: 1rem;
        width: 100%;
        
        background-color: rgba(0,0,0,0.75);

        color: whitesmoke;
        font-size: 16pt;
        text-align: center;
    }
</style>
