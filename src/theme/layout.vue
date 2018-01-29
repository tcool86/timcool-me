<template>
    <div id="app">
        <message></message>
        <app-header></app-header>
        <section class="main-section">
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

    export default {
        components : {
            'app-header' : appHeader,
            'app-footer' : appFooter,
            'message' : message
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
</style>
