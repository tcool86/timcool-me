<template>
    <div :class="mobileClassWrapper('project-tech')">
        <project-technology :tech="project.technologies.platforms"></project-technology>
        <project-technology :tech="project.technologies.languages"></project-technology>
        <project-technology :tech="project.technologies.frameworks"></project-technology>
    </div>
</template>
<script>
    import { userAgent } from '../../utility/user-agent.js'
    import projectTech from './project-technology.vue'

    export default {
        mixins : [userAgent.mobileClassMixin],
        components : {
            'project-technology' : projectTech
        },
        data : function () {
            return {
                'frameworks' : [],
                'platforms' : [],
                'languages' : []
            }
        },
        props : ['project'],
        methods : {}
    }
</script>
<style lang="scss">
    @import '../../../styles/style-vars.scss';
    @import '../../../styles/tech-icon-sprites.scss';

    .project-tech {
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0.5rem;
        right: 1rem;

        height: 32px;

        @media (max-width: $mobileSize) {
            display: none;
        }
    }
    .project-tech--mobile {
        display: none;
    }
</style>
