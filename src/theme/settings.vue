<template>
    <div class="settings-menu">
        <label class="checkbox">
            <input type="checkbox" v-on:click="clickBGAnimationBox">
            Turn off background animation
        </label>
    </div>
</template>
<script>

export default {
    methods : {
        clickBGAnimationBox : function () {
            this.$emit('updateBackground')
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/style-vars.scss';
    .checkbox {
        position: absolute;
        top: 1rem;
        left: 1rem;
        display: block;

        color: white;
        &:hover {
            color: $highlightColor;
        }
    }
</style>

