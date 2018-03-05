<template>
    <article class="project">
        <div class="project-image">
            <img :src="project.icon" :alt="project.iconAlt" />
        </div>
        <div class="project-media">
            <div class="project-title title-text" v-text="project.title"></div>
            <project-tech :project="project"></project-tech>
            <div class="project-description" v-text="project.shortDescription"></div>
            <project-dates :project="project"></project-dates>
        </div>
    </article>
</template>
<script>
    import Media from 'vue-media'
    import projectTech from './project-technology.vue'
    import projectDates from './project-dates.vue'
    import projectDetail from '../project-detail.vue'
    import '../../icons'

    export default {
        components : {
            Media,
            'project-detail' : projectDetail,
            'project-tech' : projectTech,
            'project-dates' : projectDates
        },
        props : ['project']
    }
</script>
<style lang="scss" scoped>
    .project {
        background-color: red;
        display: flex;

        .project-image {
            display: block;
            img {
                min-width: 144px;
                min-height: 144px;
                max-width: 144px;
                max-height: 144px;
            }
        }
        .project-media {
            display: flex;
            flex-wrap: wrap;
            
            width: 100%;

            .project-title {
                margin-left: 1rem;
                margin-bottom: 0.5rem;
            
                width: 64%;
            }

            .project-description {
                margin-left: 1rem;

                max-width: 64%;
                max-height: 2.8rem;

                font-size: 12pt;
                line-height: 1.4rem;

                white-space: pre-line;
                overflow: hidden;
                text-overflow: ellipsis;
            }

        }
        * {
            background-color: wheat;
            height: fit-content;
        }
    }
</style>
