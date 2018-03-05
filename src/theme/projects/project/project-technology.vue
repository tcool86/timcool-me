<template>
    <div :class="mobileClassWrapper('project-tech')">
        <div class="project-type"></div>
        <div class="project-platform"></div>
        <div class="project-code"></div>
    </div>
</template>
<script>
    import { userAgent } from '../../utility/userAgent.js'

    export default {
        mixins : [userAgent.mobileClassMixin],
        props : ['project']
    }
</script>
<style lang="scss" scoped>
    .project-tech {
        display: flex;
        justify-content: flex-end;
        
        width: 33%;
        height: 32px;
        background-color: purple;
        div {
            width: 32px;
            height: 32px;
            background-color: greenyellow;
        }
    }
    .project-tech--mobile {
        display: none;
    }
</style>
