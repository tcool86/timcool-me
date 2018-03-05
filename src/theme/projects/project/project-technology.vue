<template>
    <div class="project-tech">
        <div class="project-type"></div>
        <div class="project-platform"></div>
        <div class="project-code"></div>
    </div>
</template>
<script>
export default {
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
</style>
