<template>
    <div id="app">
        <settings @updateBackground="toggleBackgroundAnimation"></settings>
        <animated-background ref="animBG"></animated-background>
        <message></message>
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
    import message from './message.vue'
    import settings from './settings.vue'
    import animatedBackground from './animated-background.vue'

    export default {
        components : {
            'app-header' : appHeader,
            'app-footer' : appFooter,
            'message' : message,
            'settings' : settings,
            'animated-background' : animatedBackground
        },
        methods : {
            toggleBackgroundAnimation : function () {
                this.$refs.animBG.toggleBackgroundAnimation()
            }
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
</style>
