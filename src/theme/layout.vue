<template>
    <div>
        <app-header></app-header>
        <section class="main-section section">
            <div class="container-content">
                <category></category>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import appHeader from './app-header.vue'
    import appFooter from './app-footer.vue'
    import category from './category.vue'

    export default {
        components : {
            'app-header' : appHeader,
            'app-footer' : appFooter,
            'category' : category
        }
    }
</script>
<style lang="scss">
    $primary : #00FFFF;
    $link : #FF0000;
    @import '~bulma';
    .columns {
        flex-wrap : wrap
    }
</style>
