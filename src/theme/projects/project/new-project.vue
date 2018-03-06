<template>
    <article class="project">
        <project-icon :project="project"></project-icon>
        <div class="project-media">
            <div class="project-title title-text">
                <h2>{{ project.title }}</h2>
            </div>
            <project-tech :project="project"></project-tech>
            <div class="project-description" v-text="project.shortDescription"></div>
            <project-dates :project="project"></project-dates>
        </div>
    </article>
</template>
<script>
    import Media from 'vue-media'
    import projectIcon from './project-icon.vue'
    import projectTech from './project-technology.vue'
    import projectDates from './project-dates.vue'
    import projectDetail from '../project-detail.vue'
    import '../../icons'

    export default {
        components : {
            Media,
            'project-icon' : projectIcon,
            'project-detail' : projectDetail,
            'project-tech' : projectTech,
            'project-dates' : projectDates
        },
        props : ['project']
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/style-vars.scss';
    .project {
        background-color: red;
        display: flex;

        .project-media {
            display: flex;
            flex-wrap: wrap;
            
            width: 100%;

            .project-title {
                margin-left: 1rem;
                margin-bottom: 0.5rem;
            
                width: 64%;

                h2 {
                    font-size: 32pt;
                }

                @media (max-width: $mobileSize) {
                    margin-left: 0.5rem;
                    
                    h2 {
                        font-size: 16pt;
                        text-shadow: black 0 0 2px,
                                     black 0 0 2px,
                                     black 0 0 2px;
                    }
                }
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

                @media (max-width: $mobileSize) {
                    margin-left: 0.5rem;

                    max-width: 90%;
                    max-height: fit-content;

                    font-size: 10pt;
                }
            }

        }
        * {
            background-color: wheat;
            height: inherit;
        }
    }
</style>
