<template>
    <div class="project-wrapper">
        <router-link tag="article" :to="getRoute()" class="project" tabindex="0" append>
            <project-icon :project="project"></project-icon>
            <div class="project-media backdrop-sky">
                <project-title :title="project.title"></project-title>
                <project-tech :project="project"></project-tech>
                <project-description :description="project.shortDescription"></project-description>
                <project-dates :project="project"></project-dates>
            </div>
        </router-link>
    </div>
</template>
<script>
    import Media from 'vue-media'
    import projectTitle from './project-title.vue'
    import projectIcon from './project-icon.vue'
    import projectDescription from './project-description.vue'
    import projectTech from './project-technology-panel.vue'
    import projectDates from './project-dates.vue'
    import projectDetail from './project-details/project-detail.vue'
    import { EventBus } from '../../../event-bus.js'
    import '../../icons'

    const parentPathName = '/projects'
    let closeableClasses = ['detail-modal-background', 'detail-view-wrapper', 'button--close']

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
        props : ['project'],
        data : function () {
            return {
                showDetailBackground : false,
                showDetail : false,
                deeplink : null
            }
        },
        methods : {
            getRoute : function () {
                return {
                    path : this.deeplinkName()
                }
            },
            handleProjectOnClick () {
                let origin = window.location.origin + parentPathName
                let link = origin + '/' + this.deeplinkName()
                let eventData = {
                    project : this.$props.project,
                    deeplink : link
                }
                EventBus.$emit('showProjectDetail', eventData)
            },
            closeModal : function (event) {
                let targetClass = event.target.className
                event.stopPropagation()
                if (closeableClasses.includes(targetClass)) {
                    this.closeDetail()
                }
            },
            closeDetail : function () {
                this.handleDeeplinkClose()
            },
            handleDeeplink : function () {
                if (this.deeplink !== null) {
                    if (this.deeplink === this.deeplinkName()) {
                        this.handleProjectOnClick()
                    }
                }
            },
            deeplinkName : function () {
                let name = this.project.title
                return name.toLowerCase().replace(/\s/g, '-')
            }
        },
        mounted () {
            this.handleDeeplink()
            EventBus.$on('hideProjectDetail', (project) => {
                this.handleDeeplinkClose()
            })
        },
        watch : {
            '$route' (to, from) {
                this.deeplink = this.$route.params.title
                this.handleDeeplink()
            }
        },
        created () {
            this.deeplink = this.$route.params.title
        }
    }
</script>
<style lang="scss">
    @import '../../../styles/style-vars.scss';
    .project {
        display: flex;

        .project-media {
            @include smallOverlapLeft();
            display: flex;
            flex-wrap: wrap;

            border-radius: 1rem;
            
            width: 100%;
            height: 142px;

            box-shadow: 0 0 1px black, 0 0 1px black;

            transition: all 0.33s;
            &:hover {
                @include coolShadow();
                cursor: pointer;
            }

            @media (max-width: $mobileSize) {
                padding-left: 2rem;
                
                height: auto;
            }
        }
    }
    .no-focus :focus {
        .project-media {
            box-shadow: 2px 2px 3px $activeColor, 
                        3px 3px 4px $activeColor,
                        4px 4px 5px $activeColor;
            border-color: $activeColor;
        }
    }
</style>
