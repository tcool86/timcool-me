<template>
    <article class="project">
        <div class="project-image">
            <img :src="project.icon" :alt="project.iconAlt" />
        </div>
        <div class="project-media">
            <div class="project-title" v-text="project.title"></div>
            <div class="project-tech">
                <div class="project-type"></div>
                <div class="project-platform"></div>
                <div class="project-code"></div>
            </div>
            <div class="project-description" v-text="project.shortDescription">
                <div class="project-dates-container">
                    <div class="project-date date--updated" v-text="project.last_updated"></div>
                    <div class="project-date date--created" v-text="project.date_started"></div>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
    import Media from 'vue-media'
    import projectDetail from './project-detail.vue'
    import '../icons'

    export default {
        components : {
            Media,
            'project-detail' : projectDetail
        },
        props : ['project']
    }
</script>
<style lang="scss" scoped>
    .project {
        background-color: red;
        display: flex;

        .project-image {
            display: block;
            img {
                min-width: 144px;
                min-height: 144px;
                max-width: 144px;
                max-height: 144px;
            }
        }
        .project-media {
            display: flex;
            flex-wrap: wrap;

            .project-title {
                width: 50%;
            }

            .project-tech {
                display: flex;
                justify-content: flex-end;
                
                width: 50%;
            }
        }
        * {
            background-color: rgb(random($limit: 255),random($limit: 255),random($limit: 255));
            height: fit-content;
        }
    }
</style>
