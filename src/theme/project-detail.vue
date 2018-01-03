<template>
    <div class="detail-modal-background">
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
                        <!-- <div v-for="image in displayedImages" v-bind:key="image">
                            <img class="project-image" :src="image">
                        </div> -->
                    </p>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['project'],
        data : function () {
            return {
                displayedImages : []
            }
        }
    }
</script>
<style lang="scss">
    .detail-modal-background {
        display: table;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }
    .detail-view-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .project-article.detail-view {
        &.project-article {
            margin: 10% 15% 15% 15%;
        }
        .project-description {
            text-indent: 1rem;
        }
        img {
            float: left;
            text-indent: 0;
            padding: 0 0.75rem;
        }
        .title-wrapper {
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
