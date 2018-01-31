<template>
    <div class="detail-view-wrapper">
        <transition name="fade">
            <div class="project-image-detail-wrapper" v-if="selectedImage !== null" v-on:click="closeImageDetailClick">
                <div class="detail-image-wrapper">
                    <span class="close-button-wrapper" v-on:click="closeImageDetailClick">
                        <svgicon icon="closebutton" class="icon-large close-button"></svgicon>
                    </span>
                    <img :src="selectedImage"/>
                </div>
            </div>
        </transition>
        <article class="project-article detail-view">
            <span v-on:click="closeButtonClick">
                <svgicon icon="closebutton" class="icon-large close-button"></svgicon>
            </span>
            <div class="title-wrapper">
                <h2 class="project-title">
                    {{ project.title }}
                    <span v-on:click="linkClick">
                        <svgicon icon="link" class="icon-large clickable"></svgicon>
                    </span>
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
            <div class="project-description-wrapper">
                <p class="project-description">
                    <img :src="project.icon">
                    {{project.description}}
                </p>
            </div>
            <div class="separator"></div>
            <div class="images-wrapper">
                <div class="images-container columns">
                    <div class="column" v-for="projectImage in project.images" v-bind:key="projectImage.image">
                        <figure v-on:click="getImageDetail">
                            <img class="project-image" :src="projectImage.image">
                            <figcaption>
                                {{ projectImage.caption }}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
    import '../icons'

    export default {
        data : function () {
            return {
                'selectedImage' : null
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
                    window.alert('copied link')
                })
            }
        }
    }
</script>
<style lang="scss">
    @import '../../styles/style-vars.scss';
    .detail-view-wrapper {
        height: 100%;
        background-color: transparent;
        position: relative;
    }
    .project-image-detail-wrapper {
        width: 100%;
        height: 85%;
        position: fixed;
        z-index: 3;
        display: inline-flex;
        .detail-image-wrapper {
            position: relative;
            max-width: 1200px;
            margin: auto;
            .close-button-wrapper {
                position: absolute;
                right: -0.5rem;
            }
        }
        img {
            max-width: 100%;
            max-height: 100%;
            border: 0.23rem black solid;
            border-radius: 0.66rem;
            box-shadow: 0 0 5px, 0 0 5px;
        }
    }
    .project-article.detail-view {
        &:hover {
            box-shadow: none;
        }
        cursor: default;
        transition: all 0.2s ease;
        border: 1px solid $backgroundColor;
        padding: 0;
        border-radius: 0;
        height: 75%;
        overflow: scroll;
        &.project-article {
            margin: 6% 8% 15% 8%;
        }
        .project-description {
            text-indent: 1rem;
            font-size: larger;
            margin-right: 4%;
            margin-left: 4%;
            img {
                float: left;
                margin-right: 1rem;
            }
        }
        .images-container {
            margin: auto;
            figure {
                cursor: pointer;
                position: relative;
                display: block;
                overflow: hidden;
                margin: auto;
                min-width: 200px;
                max-width: 300px;
                max-height: 300px;
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
        .images-wrapper {
            display: block;
            width: 100%;
        }
        .title-wrapper {
            position: sticky;
            top: 0;
            width: 100%;
            text-align: center;
            padding: 0.1rem;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            text-indent: 0;
            margin: 0;
            margin-bottom: 0.66rem;
            z-index: 1;
            span {
                vertical-align: middle;
            }
        }
        .meta-info {
            margin: auto;
            margin-top: 1rem;
            margin-bottom: 1.54rem;
            z-index: 0;
        }
        .project-date {
            position: relative;
            left: 0;
            top: 0;
            margin: 0.5rem;
        }
    }
</style>
