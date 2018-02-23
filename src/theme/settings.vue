<template>
    <div class="settings-menu">
        <label class="checkbox">
            <input type="checkbox">
            Turn off background animation
        </label>
    </div>
</template>
<style lang="scss">
    @import '../styles/style-vars.scss';
    .checkbox {
        position: absolute;
        top: 0;
        left: 0;
        display: block;

        color: white;
        &:hover {
            color: $highlightColor;
        }
    }
</style>

