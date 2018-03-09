<template>
    <div class="extras-container">
        <h1>Extra</h1>
        <section id="friend-sites ">
            <friend-sites></friend-sites>
        </section>
    </div>
</template>
<script>
import friends from './friends.vue'
export default {
    components : {
        'friend-sites' : friends
    }
}
</script>
<style lang="scss">
    @import '../styles/style-vars.scss';

</style>
