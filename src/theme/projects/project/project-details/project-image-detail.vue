<template>
    <div class="project-image-detail-container">
        <div class="project-image-detail">
            <span class="close-button-wrapper" tabindex="0" v-on:click="closeImageDetailClick" v-on:keyup.enter="closeImageDetailClick">
                <svgicon icon="closebutton" class="icon-large close-button"></svgicon>
            </span>
            <img :src="image" v-on:click="closeImageDetailClick"/>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['image'],
        methods : {
            closeImageDetailClick : function () {
                this.$emit('closeImage')
            }
        }
    }
</script>
<style lang="scss">
    .project-image-detail-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;

        z-index: 200;
    }
    .close-button-wrapper {
        position: absolute;
        right: -8px;
    }
    .project-image-detail {
        position: relative;
        display: flex;
        align-self: center;
        justify-self: center;
        flex-direction: row-reverse;

        max-width: 92%;
        max-height: 92%;

        img {
            border: 4px black solid;
            border-radius: 2px;

            cursor: pointer;
        }
    }
</style>
