<template>
    <div class="detail-modal-background" v-on:click="closeModal">
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
                        <div v-for="projectImage in project.images" v-bind:key="projectImage.image">
                            <img class="project-image" :src="projectImage.image">
                        </div>
                    </p>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
    let closeableClasses = ['detail-modal-background', 'detail-view-wrapper']
    export default {
        props : ['project'],
        methods : {
            closeModal : function (event) {
                let targetClass = event.target.className
                event.stopPropagation()
                if (closeableClasses.includes(targetClass)) {
                    this.$emit('close')
                }
            }
        }
    }
</script>
<style lang="scss">
    @import '../styles/style-vars.scss';
    .detail-modal-background {
        display: block;
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
