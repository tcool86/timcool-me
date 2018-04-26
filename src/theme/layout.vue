<template>
    <div id="app" :class="appBackdropClass">
        <transition name="fade-in">
            <project-details v-if="project !== null" :project="project" :deeplink="deeplink"></project-details>
        </transition>
        <app-header></app-header>
        <section class="view-height">
            <div class="container-content">
                <router-view></router-view>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import appHeader from './header/app-header.vue'
    import appFooter from './app-footer.vue'
    import message from './utility/message.vue'
    import settings from './utility/settings.vue'
    import projectDetails from './projects/project/project-details/project-detail.vue'
    import { EventBus } from '../event-bus.js'
    import { userAgent } from './utility/user-agent.js'

    export default {
        mixins : [userAgent.mobileClassMixin],
        data : function () {
            return {
                'appBackdropClass' : 'default-backdrop',
                'project' : null,
                'deeplink' : null
            }
        },
        components : {
            'app-header' : appHeader,
            'app-footer' : appFooter,
            'message' : message,
            'project-details' : projectDetails,
            'settings' : settings
        },
        methods : {
            setProjectDetail : function (eventData) {
                this.project = eventData.project
                this.deeplink = eventData.deeplink
            }
        },
        mounted () {
            EventBus.$on('showProjectDetail', (project) => {
                this.setProjectDetail(project)
            })
            EventBus.$on('hideProjectDetail', (project) => {
                this.setProjectDetail({
                    'project' : null,
                    'deeplink' : null
                })
            })
            this.appBackdropClass = this.mobileClassWrapper(this.appBackdropClass)
        }
    }
</script>
<style lang="scss">
    $primary : #DE8e1e;
    $link : #FF0000;
    @import '~bulma';
    @import '../styles/global.scss';
    .columns {
        flex-wrap : wrap
    }
    #backdrop-canvas {
        position: fixed;
        top: 0;

        z-index: -1;
    }
    .default-backdrop, .default-backdrop--mobile {
        background: -webkit-gradient(linear, left top, right top, from(#282829), color-stop(0.05, $backgroundColorSolid), color-stop(0.5, #282829), color-stop(0.95, $backgroundColorSolid), to(#282829));
        background: -webkit-linear-gradient(left, #282829, $backgroundColorSolid 5%, #282829, $backgroundColorSolid 95%, #282829);
        background: -moz-linear-gradient(left, #282829, $backgroundColorSolid 5%, #282829, $backgroundColorSolid 95%, #282829);
        background: -ms-linear-gradient(left, #282829, $backgroundColorSolid 5%, #282829, $backgroundColorSolid 95%, #282829);
        background: -o-linear-gradient(left, #282829, $backgroundColorSolid 5%, #282829, $backgroundColorSolid 95%, #282829);
    }
</style>
