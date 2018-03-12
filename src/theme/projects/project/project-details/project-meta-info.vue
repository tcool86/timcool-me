<template>
    <div class="meta-info level">
        <div class="project-date last-updated level-left">
            <span>Updated:&nbsp;<b>{{ project.lastUpdatedFormatted }}</b></span>
        </div>
        <div class="project-date level-left">
            <span>Created:&nbsp;<b>{{ project.createdDateFormatted }}</b></span>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['project']
    }
</script>
