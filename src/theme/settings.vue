<template>
    <div class="settings-menu">
        <label class="checkbox">
            <input type="checkbox" v-on:click="bgCheckboxClick">
            Toggle BG animation
        </label>
    </div>
</template>
<script>

export default {
    methods : {
        bgCheckboxClick : function () {
            this.$emit('updateBackground')
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/style-vars.scss';
    .checkbox {
        position: absolute;
        bottom: 2rem;
        left: 1rem;
        display: block;

        color: black;

        z-index: 1;
        &:hover {
            color: $highlightColor;
        }
    }
</style>

