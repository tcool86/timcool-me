<template>
    <div class="project-wrapper">
        <transition name="fade-out" mode="out-in" v-on:after-enter="showDetail = true">
            <div class="detail-modal-background"
                v-on:click="closeModal"
                v-if="showDetailBackground">
                <transition name="bounce" mode="out-in" v-on:after-leave="showDetailBackground = false">
                    <project-detail :project="project" :deeplink="getFullDeeplink()" v-if="showDetail" @close="closeDetail"></project-detail>
                </transition>
            </div>
        </transition>
        <article class="project" tabindex="0" v-on:click="handleProjectOnClick" v-on:keyup.enter="handleProjectOnClick">
            <project-icon :project="project"></project-icon>
            <div class="project-media backdrop-sky">
                <project-title :title="project.title"></project-title>
                <project-tech :project="project"></project-tech>
                <project-description :description="project.shortDescription"></project-description>
                <project-dates :project="project"></project-dates>
            </div>
        </article>
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
                showDetail : false
            }
        },
        methods : {
            handleProjectOnClick () {
                this.handleDeeplinkOpen()
                this.showDetailBackground = true
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
                this.showDetail = false
            },
            handleDeeplinkOpen : function () {
                let url = this.getFullDeeplink()
                window.history.pushState(null, null, url)
            },
            handleDeeplinkClose : function () {
                if (typeof window !== 'undefined') {
                    let url = window.location.origin + parentPathName
                    window.history.pushState(null, null, url)
                }
            },
            getFullDeeplink : function () {
                return window.location.origin + parentPathName + '/' + this.deeplinkName()
            },
            deeplinkName : function () {
                let name = this.project.title
                return name.toLowerCase().replace(/\s/g, '-')
            }
        },
        created () {
            let deeplink = this.$route.params.deeplink
            let locationPath = ''
            if (typeof (window) !== 'undefined') {
                locationPath = window.location.pathname
            }
            if (typeof (deeplink) !== 'undefined' && locationPath !== parentPathName) {
                if (deeplink === this.deeplinkName()) {
                    setTimeout(() => {
                        this.showDetailBackground = true
                    }, 200)
                }
            }
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
