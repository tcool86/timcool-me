<template>
    <div class="project-detail-container" v-on:click="closeOutsideClick">
        <div class="project-detail">
            <project-detail-title :title="project.title" :deeplink="deeplink"></project-detail-title>
            <project-meta-info :project="project"></project-meta-info>
            <div class="project-description-container" tabindex="0">
                <p class="project-description" v-html="project.description"></p>
            </div>
            <div class="separator"></div>
            <project-images-section :images="project.images" @imageClicked="getImageDetail"></project-images-section>
            <div class="close-detail button button--long" v-on:click="closeButtonClick">
                close
            </div>
        </div>
    </div>
</template>
<script>
    import '../../../icons'
    import projectDetailTitle from './project-detail-title.vue'
    import projectMetaInfo from './project-meta-info.vue'
    import projectImagesSection from './project-images-section.vue'
    import { EventBus } from '../../../../event-bus'

    let closeableClasses = ['project-detail-container', 'close-detail']

    export default {
        components : {
            'project-detail-title' : projectDetailTitle,
            'project-meta-info' : projectMetaInfo,
            'project-images-section' : projectImagesSection
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
                EventBus.$emit('hideProjectDetail')
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
        z-index: $alertLayer;
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
        bottom: 40px;
        display: flex;
        margin: auto;

        width: 64%;

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
    .project-detail::-webkit-scrollbar-corner {
        display: none;
    }
</style>
