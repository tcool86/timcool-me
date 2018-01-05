<template>
    <div class="detail-view-wrapper">
        <article class="project-article detail-view" >
            <div class="title-wrapper skew-20">
                <h2 class="project-title">{{project.title}}</h2>
            </div>
            <div class="meta-info level">
                <span class="project-date last-updated level-left">
                    <span>Updated:&nbsp;<b>{{ project.lastUpdatedFormatted }}</b></span>
                </span>
                <span class="project-date level-right">
                    <span>Started:&nbsp;<b>{{ project.createdDateFormatted }}</b></span>
                </span>
            </div>
            <div class="project-description-wrapper">
                <p class="project-description">
                    <img :src="project.icon">
                    {{project.description}}
                </p>
            </div>
            <div class="separator"></div>
            <div class="images-container">
                <figure v-for="projectImage in project.images" v-bind:key="projectImage.image">
                    <img class="project-image" :src="projectImage.image">
                    <figcaption>
                        {{ projectImage.caption }}
                    </figcaption>
                </figure>
            </div>
        </article>
    </div>
</template>
<script>
    export default {
        props : ['project']
    }
</script>
<style lang="scss">
    @import '../styles/style-vars.scss';
    .detail-view-wrapper {
        height: 100%;
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
            display: inline-flex;
            figure {
                margin: 0.2rem;
            }
            figcaption {
                text-align: center;
            }
        }
        .separator {
            width: 80%;
            height: 0.33rem;
            background-color: #6e312f;
            border: 0.2rem #3b0a07;
            border-radius: 20%;
            margin: 2rem auto;
            box-shadow: 0px 0px 3px black;
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
            width: 80%;
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
        // &:hover {
        //     box-shadow: none;
        //     transition: all 0.2s ease;
        //     .project-icon-wrapper {
        //         left: 6rem;
        //     }
        //     .title-wrapper {
        //         text-indent: 0;
        //     }
        //     .project-date {
        //         right: 0;
        //     }
        // }
    }
</style>
