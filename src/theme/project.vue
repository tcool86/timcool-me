<template>
    <article class="project-article" >
       <div class="project-title-wrapper">
            <h2 class="project-title">{{project.title}}</h2>
            <span class="project-date right">Last Updated: {{project.last_updated}} </span>
            <span class="project-date right">Project Started: {{project.date_started}}</span>
        </div>
        <div class="project-description-wrapper">
            <p class="project-description">{{project.description}}</p>
        </div>
        <div class="project-image-wrapper">
            <img class="project-image" :src="project.image">
        </div>
    </article>
</template>
<script>
export default {
    props : ['project']
}
</script>
