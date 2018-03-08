<template>
    <div :class="mobileClassWrapper('project-tech')">
        <div class="project-tech-icons project--type">
            <div class="tech-wrapper">
                <i class="tech-icon tech-icon--app"></i>
            </div>
        </div>
        <div class="project-tech-icons project--platform">
            <div class="tech-wrapper">
                <i class="tech-icon tech-icon--os-x"></i>
            </div>
        </div>
        <div class="project-tech-icons project--language">
            <div class="tech-wrapper">
                <i class="tech-icon tech-icon--obj-c"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import { userAgent } from '../../utility/user-agent.js'
    import { technologyResolver } from './technology-resolver.js'

    export default {
        mixins : [userAgent.mobileClassMixin],
        data : function () {
            return {
                'frameworks' : [],
                'platforms' : [],
                'languages' : []
            }
        },
        props : ['project'],
        methods : {

        },
        created () {
            this.project.technologies.platforms.forEach(tech => {
                let test = technologyResolver.classNameForTech(tech)
                console.log(test)
            })
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../styles/style-vars.scss';
    @import '../../../styles/tech-icon-sprites.scss';

    .project-tech {
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 1rem;

        height: 32px;

        div {
            width: 32px;
            height: 32px;
            background-color: greenyellow;
        }
        @media (max-width: $mobileSize) {
            display: none;
        }
    }
    .project-tech-icons {
        display: flex;
        flex-direction: row;

        margin: 0 2px;
    }
    .tech-wrapper {
        display: block;
        position: relative;
        
        margin: 0 2px;

        width: 32px;
        height: 32px;
        i {
            display: block;
            position: relative;
            top: -16px;
            left: -16px;

            transform: scale(0.5);
        }
    }
    .project-tech--mobile {
        display: none;
    }
</style>
