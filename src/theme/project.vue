<template>
    <article class="project-article" >
        <div class="project-icon-wrapper">
            <img :src="project.icon">
        </div>
        <div class="title-wrapper skew-20">
            <h2 class="project-title">{{project.title}}</h2>
        </div>
        <span class="project-date right">Last Updated: {{project.last_updated}} </span>
        <span class="project-date right">Project Started: {{project.date_started}}</span>
        <div class="project-description-wrapper">
            <p class="project-description">
                <img class="project-image" :src="project.image">
                {{project.description}}
            </p>
        </div>
    </article>
</template>
<script>
export default {
    props : ['project']
}
</script>
<style lang="scss">
    .project-article {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        // font-family: 'EXo 2';
        align-items: flex-start;
        align-content: flex-start;
        background-color: #444;
        padding: 1em;
        border-radius: 1em;
        border: 2px solid #888;
        margin: 8em;
        background-image: url(//res.cloudinary.com/hnairgdu6/image/upload/v1513915883/project-back_pyilud.png);
        .project-icon-wrapper {
            position: absolute;
            z-index: 1;
            margin-left: 4rem;
            top: 0.5rem;
        }
        .project-title-wrapper {
            .project-title {
            }
            
        }
        .project-date {
            float: right;
        }
        .project-description-wrapper {
            margin-top: 4rem;
            text-indent: 3rem;
            flex-wrap: wrap;
            font-family: 'Exo 2';
        }
        .project-image {
            float: right;
            margin: 0.50rem;
        }
    }
</style>

