<template>
    <div class="detail-view-wrapper">
        <article class="project-article detail-view" >
            <div class="title-wrapper skew-20">
                <h2 class="project-title">{{project.title}}</h2>
                <!-- <span class="project-date last-updated" v-if="showDates">
                    <span v-if="fullText">Updated: </span><b>{{ formattedDate(project.last_updated) }}</b>
                </span> -->
                <!-- <span class="project-date" v-if="showDates">
                    <span v-if="fullText">Started: </span><b>{{ formattedDate(project.date_started) }}</b>
                </span> -->
            </div>
            <div class="project-description-wrapper">
                <p class="project-description">
                    <img :src="project.icon">
                    {{project.description}}
                </p>
                <div class="images-container">
                    <div v-for="projectImage in project.images" v-bind:key="projectImage.image">
                        <img class="project-image" :src="projectImage.image">
                    </div>
                </div>
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
        }
        .images-container {
            display: inline-flex;
        }
        img {
            float: left;
            text-indent: 0;
            padding: 0 0.75rem;
        }
        .title-wrapper {
            position: sticky;
            top: -1rem;
            margin-bottom: 1.54rem;
            text-align: center;
            text-indent: 0;
        }
        &:hover {
            box-shadow: none;
            transition: all 0.2s ease;
            cursor: inherit;
            .project-icon-wrapper {
                left: 6rem;
            }
            .title-wrapper {
                text-indent: 0;
            }
            .project-date {
                right: 0;
            }
        }
    }
</style>
