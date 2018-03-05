<template>
    <div id="app" :class="showDefaultBackground()">
        <animated-background v-if="displayBG" ref="animBG"></animated-background>
        <message></message>
        <app-header></app-header>
        <section class="view-height">
            <div class="container-content">
                <router-view></router-view>
            </div>
        </section>
        <settings @updateBackground="toggleBackgroundAnimation" v-if="displayBG"></settings>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import appHeader from './header/app-header.vue'
    import appFooter from './app-footer.vue'
    import message from './utility/message.vue'
    import settings from './settings.vue'
    import animatedBackground from './animated-background.vue'
    import { userAgent } from './userAgent.js'

    export default {
        data : function () {
            return {
                'displayBG' : false
            }
        },
        components : {
            'app-header' : appHeader,
            'app-footer' : appFooter,
            'message' : message,
            'animated-background' : animatedBackground,
            'settings' : settings
        },
        methods : {
            toggleBackgroundAnimation : function () {
                if (this.$refs.animBG) {
                    this.$refs.animBG.toggleBackgroundAnimation()
                }
            },
            showDefaultBackground : function () {
                if (this.displayBG) {
                    return
                }
                return 'default-backdrop'
            }
        },
        watch : {
            $route () {
                this.$refs.animBG.pulseAnimation()
            }
        },
        mounted () {
            this.displayBG = userAgent.canUseBackground()
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
    .default-backdrop {
        background: -webkit-gradient(linear, left top, right top, from(#282829), color-stop(0.05, $backgroundColorSolid), color-stop(0.5, #282829), color-stop(0.95, $backgroundColorSolid), to(#282829));
        background: -webkit-linear-gradient(left, #282829, $backgroundColorSolid 5%, #282829, $backgroundColorSolid 95%, #282829);
        background: -moz-linear-gradient(left, #282829, $backgroundColorSolid 5%, #282829, $backgroundColorSolid 95%, #282829);
        background: -ms-linear-gradient(left, #282829, $backgroundColorSolid 5%, #282829, $backgroundColorSolid 95%, #282829);
        background: -o-linear-gradient(left, #282829, $backgroundColorSolid 5%, #282829, $backgroundColorSolid 95%, #282829);
    }
</style>
