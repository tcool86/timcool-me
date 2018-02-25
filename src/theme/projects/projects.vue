<template>
    <div class="projects-container">
        <h1>Projects</h1>
        <project-section></project-section>
    </div>
</template>
<script>
import projectSection from './project-section.vue'
export default {
    components : {
        'project-section' : projectSection
    }
}
</script>

