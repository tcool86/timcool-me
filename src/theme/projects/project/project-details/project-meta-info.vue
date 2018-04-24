<template>
    <div :class="mobileClassWrapper('meta-info') + ' level'">
        <div class="project-date last-updated level-left">
            <span>Updated:&nbsp;<b>{{ project.lastUpdatedFormatted }}</b></span>
        </div>
        <div class="project-date level-left">
            <span>Created:&nbsp;<b>{{ project.createdDateFormatted }}</b></span>
        </div>
    </div>
</template>
<script>
    import { userAgent } from '../../../utility/user-agent.js'
    export default {
        mixins : [userAgent.mobileClassMixin],
        props : ['project']
    }
</script>
<style lang="scss" scoped>
    .meta-info--mobile {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>

