<template>
    <article class="project">
        <project-icon :project="project"></project-icon>
        <div class="project-media backdrop-sky">
            <project-title :title="project.title"></project-title>
            <project-tech :project="project"></project-tech>
            <project-description :description="project.shortDescription"></project-description>
            <project-dates :project="project"></project-dates>
        </div>
    </article>
</template>
<script>
    import Media from 'vue-media'
    import projectTitle from './project-title.vue'
    import projectIcon from './project-icon.vue'
    import projectDescription from './project-description.vue'
    import projectTech from './project-technology.vue'
    import projectDates from './project-dates.vue'
    import projectDetail from '../project-detail.vue'
    import '../../icons'

    export default {
        components : {
            Media,
            'project-title' : projectTitle,
            'project-icon' : projectIcon,
            'project-description' : projectDescription,
            'project-detail' : projectDetail,
            'project-tech' : projectTech,
            'project-dates' : projectDates
        },
        props : ['project']
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/global.scss';
    .project {
        display: flex;

        .project-media {
            @include smallOverlapLeft();
            display: flex;
            flex-wrap: wrap;

            border-radius: 1rem;
            
            width: 100%;

            background-color: wheat;
        }
        // * {
        //     background-color: wheat;
        //     height: inherit;
        // }
    }
</style>
