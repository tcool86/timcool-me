<template>
    <div>
        <app-header></app-header>
        <section class="main-section section">
            <div class="container-content">
                <router-view></router-view>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import appHeader from './app-header.vue'
    import appFooter from './app-footer.vue'

    export default {
        components : {
            'app-header' : appHeader,
            'app-footer' : appFooter
        }
    }
</script>
<style lang="scss">
    $primary : #DE8e1e;
    $link : #FF0000;
    @import '~bulma';
    .columns {
        flex-wrap : wrap
    }
</style>
