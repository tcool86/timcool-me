<template>
    <div class="project-detail-container">
        <!-- Project detail container:
                full screen and centered
                slightly transparent black background
                blur the background as well-->
        <div class="project-detail">
            <!-- Project detail:
                    % Margins on non mobile
                    dark background, light text
                    title bar
                    project description markup
                    close button-->
                <!-- <image-detail></image-detail> -->
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
            <div class="project-description-wrapper" tabindex="0">
                <p class="project-description" v-html="project.description"></p>
            </div>
            <div class="separator"></div>
            <div class="images-wrapper">
                <div class="images-container columns">
                    <div class="column" v-for="projectImage in project.images" v-bind:key="projectImage.image">
                        <figure v-on:click="getImageDetail" v-on:keyup.enter="getImageDetail" tabindex="0">
                            <img class="project-image" :src="projectImage.image">
                            <figcaption>
                                {{ projectImage.caption }}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="button button--long" v-on:click="closeButtonClick">
            close
        </div>
    </div>
</template>
<script>
    import '../../icons'
    // consider using global event bus for background blur
    export default {
        data : function () {
            return {
                'selectedImage' : null,
                'linkCopied' : false
            }
        },
        props : ['project', 'deeplink'],
        methods : {
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
    @import '../../../styles/global.scss';
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
        margin: 40px 8%;

        width: 100%;

        background-color: black;

        color: whitesmoke;
        font-size: 24pt;

        overflow: scroll;

        .meta-info, .project-description-wrapper, .images-wrapper, .images-container {
            margin: 2rem;
        }
        .images-wrapper {
            margin-bottom: 4rem;
        }
    }
    .project-title {
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
        display: flex;
        bottom: 40px;
        
        width: 84%;

        color: whitesmoke;

        text-transform: uppercase;

        &:hover {
            color: black;
        }
    }
    .images-container {
        margin: auto;

        figure {
            position: relative;
            display: block;

            margin: auto;
            
            min-width: 200px;
            max-width: 300px;
            max-height: 300px;

            overflow: hidden;
            cursor: pointer;
            img {
                border: 1px solid;
                width: 100%;
            }
        }
        figcaption {
            text-align: center;
            left: 0;
            bottom: 0;
            position: absolute;
            padding: 1rem;
            width: 100%;
            color: whitesmoke;
            font-size: 16pt;
            background-color: rgba(0,0,0,0.75);
        }
    }
    .separator {
        width: 80%;
        height: 0.13rem;
        background-color: $titleBackgroundColor;
        border: 0.2rem $color1;
        border-radius: 20%;
        margin: 3rem auto;
        box-shadow: 0px 0px 3px $backgroundColor;
    }
</style>
