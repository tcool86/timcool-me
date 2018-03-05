<template>
    <article class="project">
        <div class="project-image">
            <img :src="project.icon" :alt="project.iconAlt" />
        </div>
        <div class="project-media">
            <div class="project-title title-text" v-text="project.title"></div>
            <project-tech></project-tech>
            <div class="project-description" v-text="project.shortDescription"></div>
            <div class="project-dates-container">
                <div class="project-date date--updated" v-text="project.last_updated"></div>
                <div class="project-date date--created" v-text="project.date_started"></div>
            </div>
        </div>
    </article>
</template>
<script>
    import Media from 'vue-media'
    import projectTech from './project-technology.vue'
    import projectDetail from '../project-detail.vue'
    import '../../icons'

    export default {
        components : {
            Media,
            'project-detail' : projectDetail,
            'project-tech' : projectTech
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

                max-width: 40rem;
                max-height: 2.8rem;

                font-size: 12pt;
                line-height: 1.4rem;

                white-space: pre-line;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .project-dates-container {
                margin-left: 0.5rem;
            }
        }
        * {
            background-color: wheat;
            height: fit-content;
        }
    }
</style>
