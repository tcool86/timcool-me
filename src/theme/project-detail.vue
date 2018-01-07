<template>
    <div class="detail-view-wrapper">
        <article class="project-article detail-view" >
            <span v-on:click="closeButtonClick">
                <svgicon icon="closebutton" class="icon-large close-button"></svgicon>
            </span>
            <div class="title-wrapper skew-20">
                <h2 class="project-title">{{project.title}}</h2>
            </div>
            <div class="meta-info level">
                <div class="project-date last-updated level-left">
                    <span>Updated:&nbsp;<b>{{ project.lastUpdatedFormatted }}</b></span>
                </div>
                <div class="project-date level-left">
                    <span>Started:&nbsp;<b>{{ project.createdDateFormatted }}</b></span>
                </div>
            </div>
            <div class="project-description-wrapper">
                <p class="project-description">
                    <img :src="project.icon">
                    {{project.description}}
                </p>
            </div>
            <div class="separator"></div>
            <div class="images-container columns">
                <div class="column" v-for="projectImage in project.images" v-bind:key="projectImage.image">
                    <figure>
                        <img class="project-image" :src="projectImage.image">
                        <figcaption>
                            {{ projectImage.caption }}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
    import './icons'
    export default {
        props : ['project'],
        methods : {
            closeButtonClick (event) {
                this.$emit('close')
            }
        }
    }
</script>
<style lang="scss">
    @import '../styles/style-vars.scss';
    .detail-view-wrapper {
        height: 100%;
        background-color: transparent;
        position: relative;
    }
    .project-article.detail-view {
        cursor: default;
        transition: all 0.2s ease;
        border: 1px solid $backgroundColor;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        height: 75%;
        overflow: scroll;
        &.project-article {
            margin: 6% 15% 15% 15%;
        }
        .project-description {
            text-indent: 1rem;
            font-size: larger;
            img {
                float: left;
                text-indent: 0;
                padding: 0 0.75rem;
            }
        }
        .images-container {
            margin: auto;
            figure {
                position: relative;
                display: block;
                overflow: hidden;
                margin: 0.6rem;
                img {
                    border: 1px solid;
                }
            }
            figcaption {
                text-align: center;
                left: 0;
                bottom: 1%;
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
            margin: 2rem auto;
            box-shadow: 0px 0px 3px $backgroundColor;
        }
        .title-wrapper {
            position: sticky;
            top: -1rem;
            text-align: center;
            text-indent: 0;
            margin-bottom: 0.66rem;
            z-index: 1;
        }
        .meta-info {
            margin: auto;
            margin-bottom: 1.54rem;
            z-index: 0;
        }
        .project-date {
            position: relative;
            left: 0;
            top: 0;
            transform: skew(0);
            margin: 0.5rem;
        }
        .close-button {
            position: absolute;
            cursor: pointer;
            margin-right: 15%;
            top: -1rem;
            right: -0.5rem;
            border-radius: 100%;
            z-index: 1;
            path{
                &:first-child {
                    fill: black;
                }
                fill: grey;
            }
        }
    }
</style>
