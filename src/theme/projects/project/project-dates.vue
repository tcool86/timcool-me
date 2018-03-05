<template>
    <div class="project-dates-container">
        <div class="project-date date--updated" v-text="project.last_updated"></div>
        <div class="project-date date--created" v-text="project.date_started"></div>
    </div>
</template>
<script>
export default {
    props : ['project']
}
</script>
<style lang="scss" scoped>
    .project-dates-container {
        margin-left: 0.5rem;
    }
</style>
