<template>
    <div class="project-detail-container" v-on:click="closeOutsideClick">
        <transition name="fade" mode="out-in">
            <project-image-detail 
                v-if="selectedImage !== null" 
                :image="selectedImage"
                @closeImage="selectedImage = null"></project-image-detail>
        </transition>
        <div class="project-detail">
            <project-detail-title :title="project.title" :deeplink="deeplink"></project-detail-title>
            <project-meta-info :project="project"></project-meta-info>
            <div class="project-description-container" tabindex="0">
                <p class="project-description" v-html="project.description"></p>
            </div>
            <div class="separator"></div>
            <project-images-section :images="project.images" @imageClicked="getImageDetail"></project-images-section>
        </div>
        <div class="close-detail button button--long" v-on:click="closeButtonClick">
            close
        </div>
    </div>
</template>
<script>
    import '../../../icons'
    import projectDetailTitle from './project-detail-title.vue'
    import projectMetaInfo from './project-meta-info.vue'
    import projectImagesSection from './project-images-section.vue'
    import projectImageDetail from './project-image-detail.vue'

    let closeableClasses = ['project-detail-container', 'close-detail']

    // consider using global event bus for background blur
    export default {
        components : {
            'project-detail-title' : projectDetailTitle,
            'project-meta-info' : projectMetaInfo,
            'project-images-section' : projectImagesSection,
            'project-image-detail' : projectImageDetail
        },
        data : function () {
            return {
                'selectedImage' : null
            }
        },
        props : ['project', 'deeplink'],
        methods : {
            closeOutsideClick (event) {
                let className = event.target.className
                if (closeableClasses.includes(className)) {
                    this.closeButtonClick(event)
                }
            },
            closeButtonClick (event) {
                this.$emit('close')
            },
            closeImageDetailClick (event) {
                event.stopPropagation()
                this.selectedImage = null
            },
            getImageDetail (event) {
                event.stopPropagation()
                let figureNode = event.target.parentElement
                let imageElement = figureNode.querySelector('img')
                this.selectedImage = imageElement.src
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../../styles/style-vars.scss';
    .project-detail-container {
        display: flex;
        justify-content: center;
    
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        background-color: $backgroundColorSocial;
        z-index: 100;
    }
    .project-detail {
        position: relative;

        margin: 40px 8%;

        width: 100%;

        background-color: black;

        color: whitesmoke;
        font-size: 24pt;

        overflow: scroll;

        .meta-info, .project-description-container {
            margin: 2rem;
        }
        
    }
    .view--hide-scroll-bar::-webkit-scrollbar {
        display: none;
    }
    .button.button--long {
        position: absolute;
        bottom: 40px;
        left: 8%;
        display: flex;
        
        width: 84%;

        color: whitesmoke;

        text-transform: uppercase;

        &:hover {
            color: black;
        }
    }
    .separator {
        margin: 3rem auto;

        width: 80%;
        height: 0.13rem;
        
        border: 0.2rem $color1;
        border-radius: 20%;
        
        background-color: $titleBackgroundColor;
        box-shadow: 0px 0px 3px $backgroundColor;
    }
</style>
