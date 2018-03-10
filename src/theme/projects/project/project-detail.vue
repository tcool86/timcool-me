<template>
    <div class="project-detail-container" v-on:click="closeOutsideClick">
        <transition name="fade" mode="out-in">
            <project-image-detail 
                v-if="selectedImage !== null" 
                :image="selectedImage"
                @closeImage="selectedImage = null"></project-image-detail>
        </transition>
        <div class="project-detail">
            <div class="project-title title-text backdrop-red">
                <h2>
                    {{ project.title }}
                    <span v-on:click="linkClick">
                        <svgicon icon="link" class="icon-large clickable icon-link"></svgicon>
                    </span>
                    <transition name="fade-out">
                        <div v-if="linkCopied" class="link--copy-message">link copied</div>
                    </transition>
                </h2>
            </div>
            <div class="meta-info level">
                <div class="project-date last-updated level-left">
                    <span>Updated:&nbsp;<b>{{ project.lastUpdatedFormatted }}</b></span>
                </div>
                <div class="project-date level-left">
                    <span>Created:&nbsp;<b>{{ project.createdDateFormatted }}</b></span>
                </div>
            </div>
            <div class="project-description-container" tabindex="0">
                <p class="project-description" v-html="project.description"></p>
            </div>
            <div class="separator"></div>
            <div class="project-images-container">
                <div class="project-image-container" v-for="projectImage in project.images" v-bind:key="projectImage.image">
                    <figure v-on:click="getImageDetail" v-on:keyup.enter="getImageDetail" tabindex="0">
                        <img class="project-image" :src="projectImage.image">
                        <figcaption>
                            {{ projectImage.caption }}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div class="close-detail button button--long" v-on:click="closeButtonClick">
            close
        </div>
    </div>
</template>
<script>
    import '../../icons'
    import projectImageDetail from './project-image-detail.vue'

    let closeableClasses = ['project-detail-container', 'close-detail']

    // consider using global event bus for background blur
    export default {
        components : {
            'project-image-detail' : projectImageDetail
        },
        data : function () {
            return {
                'selectedImage' : null,
                'linkCopied' : false
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
            },
            linkClick (event) {
                this.$copyText(this.deeplink).then(() => {
                    this.linkCopied = true
                    setTimeout(() => {
                        this.linkCopied = false
                    }, 1000)
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/style-vars.scss';
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
        .project-images-container {
            display: flex;
            flex-direction: row;

            margin: 4rem 2rem;
        }
        .images-wrapper {
            margin-bottom: 4rem;
        }
    }
    .project-title {
        position: sticky;
        top: 0;
        left: 0;

        width: 100%;
        h2 {
            font-size: 48pt;
        }
    }
    .link--copy-message {
        position: absolute;
        display: inline;
     
        margin-left: 2rem;
        
        @media (max-width: $tabletSize) {
            position: relative;
            display: block;

            margin: 0;

            width: 100%;
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
    .project-images-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    .project-image-container {
        margin: 1rem;

        min-height: 200px;
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
